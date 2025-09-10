require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageTyping
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('typingStart', async (typing) => {
    // Don't respond to bots typing
    if (typing.user.bot) return;
    
    // Keywords to look for in recent messages
    const keywords = ['help', 'support', 'helpdesk', 'support ticket'];
    
    try {
        // Fetch recent messages from the channel (last 50 messages to ensure we catch relevant ones)
        const recentMessages = await typing.channel.messages.fetch({ limit: 10 });
        
        // Check if any recent message within the last 2 minutes contains the keywords
        const twoMinutesAgo = Date.now() - 2 * 60 * 1000; // 2 minutes in milliseconds
        const hasRecentKeywords = recentMessages.some(message => {
            const content = message.content.toLowerCase();
            const isRecent = message.createdTimestamp >= twoMinutesAgo;
            return isRecent && keywords.some(keyword => content.includes(keyword));
        });
        
        // Only send alert if there was a recent message with keywords
        if (hasRecentKeywords) {
            // Find the suspicious-messages channel
            const suspiciousChannel = typing.guild.channels.cache.find(channel => channel.name === 'suspicious-messages');
            
            if (suspiciousChannel) {
                // Send message to the suspicious-messages channel with proper user mention
                suspiciousChannel.send(`<@${typing.user.id}> was typing in ${typing.channel} after a help-related message within the last 2 minutes`);
            } else {
                console.log('suspicious-messages channel not found');
            }
        }
    } catch (error) {
        console.error('Error checking recent messages:', error);
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);