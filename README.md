
# Hydra DevX Selfbot

Welcome to the **Hydra DevX Selfbot**! This selfbot provides various utility, moderation, and fun commands to enhance your experience on Discord. Please note that using selfbots on Discord is against the platform's Terms of Service, so your account may be at risk of suspension. Use responsibly!

---

## Features
- **Utility Commands**: Kick, ban, mute, and clear messages with ease.
- **Server Management**: Commands to delete channels, roles, and more.
- **Fun Commands**: Play games, set statuses, and send announcements.
- **Raids**: Automated raid commands (for responsible use only).
- **User Info**: Retrieve details of users, including account creation date, user ID, and status.

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/hydra-devx-selfbot.git
   cd hydra-devx-selfbot
   ```

2. **Install Dependencies**  
   Ensure you have [Node.js](https://nodejs.org/) installed, then install required dependencies:
   ```bash
   npm install
   ```

3. **Add Your Discord Token**  
   - Open the `settings.json` file and add your Discord token:
   ```json
   {
     "token": "YOUR_DISCORD_TOKEN"
   }
   ```

4. **Customize Commands**  
   - Customize or disable certain commands by editing `index.mjs`. Ensure your bot has the necessary permissions on your server.

5. **Run the Selfbot**
   ```bash
   node index.mjs
   ```
   You should see a console message confirming the bot has logged in.

---

## Commands Overview

### Help Commands
- `-help`: Displays a list of all available command sections (Raids, Tools, Info, etc.).
- `-[section] [page]`: Displays commands within a specific section and page.

### Example Command Sections

#### Raids Commands
- `-raids 1`: Displays primary raid commands like `-spam`, `-nuke`, `-raidstart`, `-raidstop`, and `-clear`.
- `-raids 2`: Displays destructive commands like `-deleteChannels`, `-deleteRoles`, `-banAllMembers`, `-clearAllMessages`, and `-destroy`.

#### Tools Commands
- `-tools 1`: Displays utility commands like `-kick`, `-ban`, `-mute`, and `-ping`.

#### Info Commands
- `-info 1`: Shows server stats, latency (`-ping`), and user info.

### Example Command Usage

- **Ban a User**: `-ban @user`
- **Kick a User**: `-kick @user`
- **Start a Raid**: `-raidstart [message]`

> **Note**: Each destructive command requires confirmation before executing. This feature is included to prevent accidental misuse.

---

## Warnings

- **Use Responsibly**: This bot includes commands that are highly destructive if misused. Avoid using it on servers where you lack permissions or authorization.
- **Compliance**: Selfbots are against Discord's Terms of Service. Use at your own risk.

---

## License
Open source but plagiarism is discouraged. Please give credit if you modify or share this code.

## Contributing
Feel free to fork this repository and submit pull requests. Ensure all code additions are well-documented and safe for general use.

---

Enjoy responsibly, and please use this bot for legitimate and authorized purposes only!
