# Discord Spam Prevention Bot

## Overview
This is a Discord bot designed to help prevent spam by monitoring typing activity in a server. The bot detects when a user starts typing in a channel after a message containing specific keywords (`help`, `support`, `helpdesk`, `support ticket`) has been posted within the last 2 minutes. It then sends an alert to a designated `#suspicious-messages` channel, tagging the user and providing context about the channel where the typing occurred.

## Features
- **Typing Detection**: Listens for typing events in Discord channels.
- **Keyword Monitoring**: Scans recent messages (within 2 minutes) for keywords like `help`, `support`, `helpdesk`, or `support ticket`.
- **Alert System**: Sends notifications to a `#suspicious-messages` channel with the tagged user and channel context when conditions are met.
- **Bot Filtering**: Ignores typing events and messages from bots to reduce noise.

## Requirements
- **Node.js**: Version 16 or higher.
- **Discord.js**: Version 14 or higher.
- **A Discord Bot Token**: Obtain this from the [Discord Developer Portal](https://discord.com/developers/applications).
- **macOS/Linux/Windows**: The bot runs on any system with Node.js installed.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/discord-spam-prevention-bot.git
   cd discord-spam-prevention-bot