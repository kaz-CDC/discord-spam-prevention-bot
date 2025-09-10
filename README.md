Discord Spam Prevention Bot
Overview
This is a Discord bot designed to help prevent spam by monitoring typing activity in a server. The bot detects when a user starts typing in a channel after a message containing specific keywords (help, support, helpdesk, support ticket) has been posted within the last 2 minutes. It then sends an alert to a designated #suspicious-messages channel, tagging the user and providing context about the channel where the typing occurred.
Features

Typing Detection: Listens for typing events in Discord channels.
Keyword Monitoring: Scans recent messages (within 2 minutes) for keywords like help, support, helpdesk, or support ticket.
Alert System: Sends notifications to a #suspicious-messages channel with the tagged user and channel context when conditions are met.
Bot Filtering: Ignores typing events and messages from bots to reduce noise.

Requirements

Node.js: Version 16 or higher.
Discord.js: Version 14 or higher.
A Discord Bot Token: Obtain this from the Discord Developer Portal.
macOS/Linux/Windows: The bot runs on any system with Node.js installed.

Setup Instructions

Clone the Repository:
git clone https://github.com/yourusername/discord-spam-prevention-bot.git
cd discord-spam-prevention-bot

Replace yourusername with your GitHub username.

Install Dependencies:
npm install discord.js dotenv


Configure Environment Variables:

Create a .env file in the project root.
Add your Discord bot token:DISCORDJS_BOT_TOKEN=your-bot-token-here


You can get a bot token by creating a bot in the Discord Developer Portal.


Set Up the Discord Bot:

In the Discord Developer Portal, create a new application and add a bot.
Invite the bot to your server with the following permissions:
View Channels
Send Messages
Read Message History


Ensure the bot has access to the #suspicious-messages channel.


Run the Bot:
node bot.js

The bot will log in and display Logged in as <BotName>#1234! in the console.


Usage

Keyword Monitoring: The bot monitors for messages containing help, support, helpdesk, or support ticket in any channel it has access to.
Typing Alerts: If a user starts typing in a channel where a keyword-containing message was posted within the last 2 minutes, the bot sends an alert to the #suspicious-messages channel in the format:<@UserID> was typing in #channel-name after a help-related message within the last 2 minutes


Channel Requirement: Ensure a channel named suspicious-messages exists in your server, and the bot has permission to send messages there.

File Structure

bot.js: The main bot script containing the Discord.js logic.
.env: Stores the bot token (not included in the repository; create this file manually).
.gitignore: Ignores node_modules and .env to prevent sensitive data or large files from being uploaded.

Troubleshooting

Bot Not Sending Alerts:
Verify the #suspicious-messages channel exists and the bot has permissions to read and send messages there.
Check that the bot token in .env is correct.
Ensure the bot has the required intents (Guilds, GuildMessages, MessageContent, GuildMembers, GuildMessageTyping).


Console Errors:
If you see suspicious-messages channel not found, confirm the channel name matches exactly (case-sensitive).
For other errors, check the console output and refer to the Discord.js documentation.


Authentication Issues: If pushing to GitHub fails, ensure your GitHub credentials (personal access token or SSH key) are correctly configured.

Contributing
Feel free to submit pull requests or open issues on the GitHub repository to suggest improvements or report bugs.
License
This project is unlicensed. Feel free to use and modify it as needed.