import { Client } from "discord.js-selfbot-v13";
import settings from "./settings.json" assert { type: "json" };

const client = new Client({checkupdates : false});

client.once("ready", () => {
    console.log(`Logged into ${client.user.username}`);
});


let afkReason = '';
let afkStatus = false;
let afkStartTime = null;
let spamInterval = null;
let raidActive = false;
let raidInterval;


client.on("messageCreate", async (message) => {

    const content = message.content.toLowerCase();

    if (content === "-help") {
        try {
            // Delete the command message
            await message.delete();
    
            const helpMessage = `
    ✨ -[section] [page] ? Default is 1 ✨
    >------------------------------------<
    
    🔨 -raids         -  Display all raid and nuke commands
    📊 -info          -  Get server and user information commands
    🎲 -fun           -  Access various fun and games commands
    🛠️ -tools         -  Explore utility and productivity commands
    📡 -discordtools   -  Discover all Discord-related tools commands
    👤 -profile       -  Customize and manage your profile settings
    
    >------------------------------------<
    🌟 Selfbot crafted by \`@hydra_devx\`
    >------------------------------------<
            `;
    
            await message.channel.send(helpMessage);
        } catch (error) {
            console.error("Error sending help message:", error);
        }
    } else if (content === "-discordtools 1") {
        // Delete the command message
        await message.delete();
    
        const discordToolsMessage = `
        🛠️ **Discord Tools - Page 1** 🛠️
        >------------------------------------<
    
        🔍 **Command List:**
    
        📌 -pin [messageID]            -  Pins a specific message by its ID
        🧹 -purge @user [number]       -  Clears a specified number of messages from a specific user
        🔒 -lock                        -  Locks the current channel for all users
        🔓 -unlock                      -  Unlocks the current channel for all users
        📄 -archive [number]           -  Archives the last specified number of messages in a file
        📢 -announce [message]         -  Sends an announcement to a specific channel
    
        >------------------------------------<
    
        🌟 For more tools, use: \`-discordtools 2\`
    
        >------------------------------------<
        ✨ Selfbot crafted by \`@hydra_devx\`
        >------------------------------------<
        `;
    
        await message.channel.send(discordToolsMessage);
    }
    
    
     else if (content === "-raids 1") {
        // Delete the command message
        await message.delete();
    
        const raidsMessage = `
🚨 **Raids Commands - Page 1** 🚨
>------------------------------------<
    
⚔️ **Command List:**

🌪️ -spam <amount> <interval in ms> <msg>           -  Spam a message in a specified channel
💥 -nuke                                           -  Execute a nuke command (use responsibly)
🚀 -raidstart <msg>                                -  Start a raid operation in the server
🛡️ -raidstop                                       -  Stop the ongoing raid operation
🔧 -clear <number>                                 -  Clear the specified number of messages from the channel
    
>------------------------------------<
    
🌟 For more raid commands, use: \`-raids 2\`
    
>------------------------------------<
✨ Selfbot crafted by \`@hydra_devx\`
>------------------------------------<
        `;
    
        await message.channel.send(raidsMessage);
    } else if (content === "-tools 1") {
        
               
                await message.delete();

                const toolsMessage = `
🚨 **Utility Commands - Page 1** 🚨
>------------------------------------<

⚔️ **Command List:**

👤 -kick @user           - Kicks the specified user from the server.
🚫 -ban @user            - Bans the specified user from the server.
🔓 -unban userID         - Unbans a user by their ID.
🔇 -mute @user duration   - Mutes the specified user for the given duration.

>------------------------------------<

🌟 For more utility commands, use: \`-tools 2\`

>------------------------------------<
✨ Selfbot crafted by \`@hydra_devx\`
>------------------------------------<
                `;

                await message.channel.send(toolsMessage);
            } else if (content === "-profile 1") {
                // Delete the command message
                await message.delete();
            
                const profileMessage = `
👤 **Profile Commands - Page 1** 👤
>------------------------------------<
            
🔍 **Command List:**
            
💤 -afk                   -  Set your status to AFK with an optional reason
🚶‍♂️ -unafk                -  Remove your AFK status and notify others
🎮 -play [game]         -  Set your status to playing a game
🎥 -stream [title]      -  Set your status to streaming with a title
📺 -watch [title]       -  Set your status to watching a show or movie
🎶 -listen [song]       -  Set your status to listening to a song
⏹️ -stopactivity        -  Stop any ongoing activity status
            
>------------------------------------<
            
🌟 For more profile commands, use: \`-profile 2\`
            
>------------------------------------<
✨ Selfbot crafted by \`@hydra_devx\`
>------------------------------------<
                    `;
            
                await message.channel.send(profileMessage);
            } else if (content === "-profile 2") {
                await message.delete();

                const profileMessage2 = `
                👤 **Profile Commands - Page 2** 👤
>------------------------------------<

🔍 **Command List:**

🔴 -dnd [reason]         -  Set your status to Do Not Disturb with an optional reason
🌙 -idle [description]   -  Set your status to Idle with an optional description
🖼️ -pfp @user            - gives profile picture of mentioned user

>------------------------------------<

🌟 For more profile commands, use: \`-profile 3\`

>------------------------------------<
✨ Selfbot crafted by \`@hydra_devx\`
>------------------------------------<

                `;
            
                await message.channel.send(profileMessage2);
            } else if (content === "-info 1") {
                try {
                    // Delete the command message
                    await message.delete();
            
                    const infoMessage = `
            🌟 **Info Commands - Page 1** 🌟
            >------------------------------------<
            
            📊 **Command List:**
            
            📈 -stats          - Displays the total and online members in the server.
            🏓 -ping                 - Checks the bot's current latency.
            🔍 -userinfo @user      - Displays information about the specified user.
            
            
            >------------------------------------<
            
            ✨ Selfbot crafted by \`@hydra_devx\`
            >------------------------------------<`;
            
                    await message.channel.send(infoMessage);
                } catch (error) {
                    console.error("Error sending info message:", error);
                }
            }
            else if (content === "-raids 2") {
                // Delete the command message
                await message.delete();
            
                const raidsMessage = `
            🚨 **Raids Commands - Page 2** 🚨
            >------------------------------------<
            
            ⚔️ **Command List:**
            
            🔨 -deleteChannels                           -  Delete all channels in the server (requires confirmation)
            🎭 -deleteRoles                              -  Delete all roles in the server (requires confirmation)
            🚫 -banAllMembers                            -  Ban all members in the server (requires confirmation)
            🧹 -clearAllMessages                         -  Delete all messages across all channels (requires confirmation)
            📁 -deleteCategories                         -  Delete all categories in the server (requires confirmation)
            🔥 -destroy                                  -  Perform a full server wipe, deleting channels, roles, members, and categories (requires confirmation)
            
            >------------------------------------<
            
            🌟 Use these commands responsibly. Always double-check before proceeding!
            
            >------------------------------------<
            ✨ Selfbot crafted by \`@hydra_devx\`
            >------------------------------------<
                `;
            
                await message.channel.send(raidsMessage);
            }
            
        }
    
);

client.on("messageCreate", async (message) => {
    
    const content = message.content.toLowerCase();
    
     
    if (content.startsWith('-spam')) {
        await message.delete();
        const args = content.split(' ');
        const count = parseInt(args[1]);
        const messageToSpam = args.slice(3).join(' ');  // Skip the first 3 words (command, count, interval)
        const interval = parseInt(args[2]);
    
        // Validate inputs
        if (isNaN(count) || count <= 0 || !messageToSpam || isNaN(interval) || interval <= 0) {
            message.reply("🔔 Usage: -spam [number] [interval in ms] [message]");
            return;
        }
    
        // Prevent multiple spam actions at once
        if (spamInterval) {
            message.reply("⚠️ A spam action is already running. Please wait for it to finish.");
            return;
        }
    
        let spamCount = 0;
        spamInterval = setInterval(() => {
            if (spamCount < count) {
                message.channel.send(messageToSpam);
                spamCount++;
            } else {
                clearInterval(spamInterval);
                spamInterval = null;
            }
        }, interval);  // Use the user-specified interval
    } else if (content === "-nuke") {
        // Delete the command message
        await message.delete();
    
        const channel = message.channel;
    
        // Ask for confirmation
        const confirmationMessage = await channel.send("⚠️ **Are you sure you want to nuke this channel? Type `yes` to confirm.**");
        
        // Filter for the response to wait for confirmation
        const filter = response => {
            return response.author.id === message.author.id && response.content.toLowerCase() === 'yes';
        };
    
        // Wait for confirmation
        channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
            .then(async collected => {
                const response = collected.first();
    
                // Confirm nuke action
                await channel.send("🔴 **Nuking in progress...** This action cannot be undone!");
    
                // Step 1: Delete messages in the channel
                const fetchedMessages = await channel.messages.fetch({ limit: 100000 }); // Fetch up to 100000 messages
                await Promise.all(fetchedMessages.map(msg => msg.delete())); // Delete each message individually
    
                // Step 2: Kick all members except the bot
                const members = await channel.guild.members.fetch();
                members.forEach(member => {
                    if (!member.user.bot) { // Check if the member is not a bot
                        member.kick('Nuked by selfbot command').catch(err => console.error(`Could not kick ${member.user.tag}: ${err}`));
                    }
                });
    
                await channel.send("✅ **Nuke completed!** All messages deleted and members kicked.");
            })
            .catch(err => {
                // Handle case where no confirmation is received
                channel.send("❌ **Nuke cancelled. No confirmation received in time.**");
                console.error('Confirmation not received:', err);
            });
    }else if (content.startsWith("-raidstart")) {
        await message.delete();
        const args = content.split(' ').slice(1); // Get the arguments after the command
        const messageToSend = args.join(' ') || "🚨 Raid initiated! 🚨"; // Default message if none provided
        const interval = 200; // Set your desired interval in milliseconds
    
        if (raidActive) {
            return message.reply("Raid is already active! Use `-raidstop` to stop it.");
        }
    
        raidActive = true; // Mark raid as active
        message.channel.send("🔴 **Raid started!** Messages will be sent every 200 miliseconds.");
    
        raidInterval = setInterval(() => {
            if (raidActive) {
                message.channel.send(messageToSend);
            }
        }, interval);
    }else if (content === "-raidstop") {
        await message.delete();
        if (!raidActive) {
            return message.reply("No active raid to stop.");
        }
    
        clearInterval(raidInterval); // Stop the interval
        raidActive = false; // Mark raid as inactive
        message.channel.send("✅ **Raid stopped!** No more messages will be sent.");
    }else if (content.startsWith("-clear")) {
        // Delete the command message
        await message.delete();
    
        const args = content.split(' ');
        const amount = parseInt(args[1]); // Get the amount of messages to clear
    
        // Check if the amount is a valid number
        if (isNaN(amount) || amount <= 0) {
            return message.channel.send("❌ **Please provide a valid number of messages to clear.**");
        }
    
        try {
            // Fetch and delete the specified number of messages
            const fetchedMessages = await message.channel.messages.fetch({ limit: amount + 1 }); // +1 to include the command message
            await Promise.all(fetchedMessages.map(msg => msg.delete()));
    
            // Send confirmation message
            await message.channel.send(`✅ **Successfully cleared ${amount} messages!**`).then(msg => {
                setTimeout(() => msg.delete(), 5000); // Delete confirmation after 5 seconds
            });
        } catch (error) {
            console.error("Error clearing messages:", error);
            message.channel.send("❌ **There was an error trying to clear messages.**");
        }
    }
    else if (content === "-deleteChannels") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to delete **ALL** channels? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Deleting all channels...");
            
            // Delete channels
            message.guild.channels.cache.forEach(channel => channel.delete().catch(console.error));
            confirmMessage.edit("✅ All channels deleted.");
        });
    }
    
    else if (content === "-deleteRoles") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to delete **ALL** roles? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Deleting all roles...");
            
            // Delete roles (except @everyone)
            message.guild.roles.cache
                .filter(role => role.name !== "@everyone")
                .forEach(role => role.delete().catch(console.error));
    
            confirmMessage.edit("✅ All roles deleted.");
        });
    }
    
    else if (content === "-banAllMembers") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to **BAN ALL** members? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Banning all members...");
    
            // Ban all members
            message.guild.members.cache
                .filter(member => !member.user.bot && member.id !== message.author.id)
                .forEach(member => member.ban({ reason: "Mass ban" }).catch(console.error));
    
            confirmMessage.edit("✅ All members banned.");
        });
    }
    
    else if (content === "-clearAllMessages") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to delete **ALL MESSAGES** in all channels? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Deleting all messages in all channels...");
    
            // Delete messages in all text channels
            message.guild.channels.cache
                .filter(channel => channel.isText())
                .forEach(channel => {
                    channel.messages.fetch().then(messages => {
                        messages.forEach(msg => msg.delete().catch(console.error));
                    });
                });
    
            confirmMessage.edit("✅ All messages deleted.");
        });
    }
    
    else if (content === "-deleteCategories") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to delete **ALL CATEGORIES**? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Deleting all categories...");
    
            // Delete categories
            message.guild.channels.cache
                .filter(channel => channel.type === "GUILD_CATEGORY")
                .forEach(category => category.delete().catch(console.error));
    
            confirmMessage.edit("✅ All categories deleted.");
        });
    }
    
    else if (content === "-destroy") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to **DESTROY EVERYTHING**? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Destroying the server...");
    
            // Delete all channels
            message.guild.channels.cache.forEach(channel => channel.delete().catch(console.error));
    
            // Delete roles
            message.guild.roles.cache
                .filter(role => role.name !== "@everyone")
                .forEach(role => role.delete().catch(console.error));
    
            // Ban all members
            message.guild.members.cache
                .filter(member => !member.user.bot && member.id !== message.author.id)
                .forEach(member => member.ban({ reason: "Server destruction" }).catch(console.error));
    
            // Delete categories
            message.guild.channels.cache
                .filter(channel => channel.type === "GUILD_CATEGORY")
                .forEach(category => category.delete().catch(console.error));
    
            confirmMessage.edit("✅ Server destroyed.");
        });
    }
    
});  


client.on("messageCreate", async (message) => {
    if (message.author.id !== client.user.id) {
        if (afkStatus && message.mentions.has(client.user)) {
            message.reply(`💤 I'm currently AFK. Reason: ${afkReason}`);
        }
        return;
    }

    const content = message.content.toLowerCase();

    if (content === "-afk") {
        await message.delete()
        afkStatus = true;
        afkReason = content.split(' ').slice(1).join(' ') || 'No reason provided';
        afkStartTime = new Date();
        message.channel.send(`😴 You are now AFK. Reason: ${afkReason}`);
    } else if (content === "-unafk") {
        await message.delete()
        afkStatus = false;
        const afkEndTime = new Date();
        const afkDuration = afkEndTime - afkStartTime;
    
        // Convert duration to days, hours, minutes, and seconds
        const seconds = Math.floor((afkDuration / 1000) % 60);
        const minutes = Math.floor((afkDuration / (1000 * 60)) % 60);
        const hours = Math.floor((afkDuration / (1000 * 60 * 60)) % 24);
        const days = Math.floor(afkDuration / (1000 * 60 * 60 * 24));
    
        let afkDurationString = '';
        if (days > 0) afkDurationString += `${days} day${days > 1 ? 's' : ''} `;
        if (hours > 0) afkDurationString += `${hours} hour${hours > 1 ? 's' : ''} `;
        if (minutes > 0) afkDurationString += `${minutes} minute${minutes > 1 ? 's' : ''} `;
        if (seconds > 0) afkDurationString += `${seconds} second${seconds > 1 ? 's' : ''} `;
    
        message.channel.send(`🎉 You are no longer AFK! You were AFK for ${afkDurationString.trim()}.`);
    } else if (content.startsWith("-play ")) {
        await message.delete();
        const activityDescription = content.slice(6).trim(); // Get the game description
        if (activityDescription) {
            await client.user.setActivity(activityDescription, { type: "PLAYING" });
            message.channel.send(`🎮 You are now playing **${activityDescription}**!`);
        } else {
            message.channel.send("❌ Please provide a game description.");
        }
    }
    
    // Command to set streaming activity
    else if (content.startsWith("-stream ")) {
        await message.delete();
        const activityDescription = content.slice(8).trim(); // Get the stream title
        if (activityDescription) {
            await client.user.setActivity(activityDescription, { type: "STREAMING", url: "https://www.twitch.tv/your_channel" }); // Replace with your streaming URL
            message.channel.send(`🎥 You are now streaming **${activityDescription}**!`);
        } else {
            message.channel.send("❌ Please provide a streaming description.");
        }
    }
    
    // Command to set watching activity
    else if (content.startsWith("-watch ")) {
        await message.delete();
        const activityDescription = content.slice(7).trim(); // Get the watch description
        if (activityDescription) {
            await client.user.setActivity(activityDescription, { type: "WATCHING" });
            message.channel.send(`📺 You are now watching **${activityDescription}**!`);
        } else {
            message.channel.send("❌ Please provide a title to watch.");
        }
    }
    
    // Command to set listening activity
    else if (content.startsWith("-listen ")) {
        await message.delete();
        const activityDescription = content.slice(8).trim(); // Get the song title
        if (activityDescription) {
            await client.user.setActivity(activityDescription, { type: "LISTENING" });
            message.channel.send(`🎶 You are now listening to **${activityDescription}**!`);
        } else {
            message.channel.send("❌ Please provide a song description.");
        }
    }
    
    // Command to stop any ongoing activity
    else if (content === "-stopactivity") {
        await message.delete();
        await client.user.setActivity(null); // Clear the activity
        message.channel.send("⏹️ Your activity status has been cleared.");
    }else if (content.startsWith("-dnd")) {
        const reason = content.slice(5).trim() || "Do Not Disturb";
        await client.user.setPresence({ activities: [{ name: reason }], status: "dnd" });
        message.channel.send(`🔴 You are now in Do Not Disturb mode: **${reason}**`);
    }

    // Set Idle status with optional description
    else if (content.startsWith("-idle")) {
        await message.delete();
        const description = content.slice(6).trim() || "Idle";
        await client.user.setPresence({ activities: [{ name: description }], status: "idle" });
        message.channel.send(`🌙 You are now idle: **${description}**`);
    }
    else if (content.startsWith('pfp')) {
        const userToCheck = msg.mentions.users.first() || msg.author;
        msg.channel.send(`${userToCheck.displayAvatarURL({ dynamic: true })}`);
    }
    
});


client.on('messageCreate', async (message) => {

    const content = message.content.toLowerCase();
    
    if (content.startsWith('-unban')) {
        const userId = content.split(' ')[1];
        if (!userId) {
            message.reply("Please provide the ID of the user to unban.");
            return;
        }

        try {
            const unbannedUser = await message.guild.members.unban(userId);
            message.reply(`${unbannedUser.username} has been unbanned.`);
        } catch (error) {
            message.reply("Failed to unban the user. Please check the ID or permissions.");
        }
    }else if (content === "-ping") {
        try {
            // Delete the command message to keep the chat clean
            await message.delete();
    
            // Send an initial message indicating that the bot is checking ping
            const pingMessage = await message.channel.send('🏓 Checking your ping...');
    
            // Get the ping value
            const ping = Math.round(client.ws.ping); // or calculate it according to your logic
    
            // Edit the message with the actual ping
            await pingMessage.edit(`🏓 Pong! Your ping is ${ping}ms.`);
        } catch (error) {
            // Log the error for debugging
            console.error("Error in ping command:", error);
            
            // Optionally, send an error message to the channel
            try {
                await message.channel.send('❌ An error occurred while checking ping.');
            } catch (err) {
                console.error("Error sending error message:", err);
            }
        }
    }
    
     else if (content.startsWith('-kick')) {
        const userToKick = message.mentions.users.first();
        if (!userToKick) {
            message.reply("Please mention a user to kick.");
            return;
        }

        const member = message.guild.members.cache.get(userToKick.id);
        if (member) {
            await member.kick();
            message.reply(`${userToKick.username} has been kicked.`);
        } else {
            message.reply("User not found in this server.");
        }
    } else if (content.startsWith('-ban')) {
        const userToBan = message.mentions.users.first();
        if (!userToBan) {
            message.reply("Please mention a user to ban.");
            return;
        }

        const member = message.guild.members.cache.get(userToBan.id);
        if (member) {
            await member.ban();
            message.reply(`${userToBan.username} has been banned.`);
        } else {
            message.reply("User not found in this server.");
        }
    } else if (content.startsWith('-mute')) {
        await message.delete()
        const userToMute = message.mentions.users.first();
        const duration = content.split(' ')[2];

        if (!userToMute || !duration) {
            message.reply("Please mention a user to mute and specify the duration (e.g., 10m, 1h, 1d).");
            return;
        }

        const member = message.guild.members.cache.get(userToMute.id);
        if (member) {
            const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            if (muteRole) {
                await member.roles.add(muteRole);
                message.reply(`${userToMute.username} has been muted for ${duration}.`);

                setTimeout(async () => {
                    await member.roles.remove(muteRole);
                    message.channel.send(`${userToMute.username} has been unmuted.`);
                }, ms(duration)); // Ensure you have 'ms' installed
            } else {
                message.reply("Muted role does not exist. Please create a 'Muted' role.");
            }
        } else {
            message.reply("User not found in this server.");
        }
    }
});

client.on("messageCreate", async (message) => {
    const content = message.content.toLowerCase();

    // Pin a specific message by its ID
    if (content.startsWith("-pin ")) {
        await message.delete()
        const messageId = content.split(" ")[1];
        if (!messageId) {
            message.channel.send("❌ Please provide a valid message ID to pin.");
            return;
        }
        try {
            const msgToPin = await message.channel.messages.fetch(messageId);
            await msgToPin.pin();
            message.channel.send(`📌 Successfully pinned the message with ID: ${messageId}`);
        } catch (error) {
            message.channel.send("❌ Unable to pin the message. Check the ID or permissions.");
        }
    }

    // Purge messages from a specific user, with optional number of messages
    else if (content.startsWith("-purge ")) {
        await message.delete()
        const args = content.split(" ");
        const userToPurge = message.mentions.users.first();
        const numMessages = parseInt(args[2]) || 50; // Default to 50 if not specified

        if (!userToPurge) {
            message.channel.send("❌ Please mention a user to purge messages.");
            return;
        }
        try {
            const messages = await message.channel.messages.fetch({ limit: 100 });
            const userMessages = messages.filter(msg => msg.author.id === userToPurge.id).slice(0, numMessages);
            await message.channel.bulkDelete(userMessages);
            message.channel.send(`🧹 Cleared ${userMessages.size} messages from ${userToPurge.tag}.`);
        } catch (error) {
            message.channel.send("❌ Unable to purge messages. Check permissions.");
        }
    }

    // Lock the channel
    else if (content === "-lock") {
        await message.delete()
        try {
            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SEND_MESSAGES: false });
            message.channel.send("🔒 Channel is now locked.");
        } catch (error) {
            message.channel.send("❌ Unable to lock the channel.");
        }
    }

    // Unlock the channel
    else if (content === "-unlock") {
        await message.delete();
        try {
            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SEND_MESSAGES: true });
            message.channel.send("🔓 Channel is now unlocked.");
        } catch (error) {
            message.channel.send("❌ Unable to unlock the channel.");
        }
    }

    // Archive (send recent channel messages to a file)
    else if (content.startsWith("-archive ")) {
        await message.delete();
        const numMessages = parseInt(content.split(" ")[1]) || 50; // Default to 50 if not specified

        try {
            const messages = await message.channel.messages.fetch({ limit: numMessages });
            const archiveData = messages.map(m => `${m.author.tag}: ${m.content}`).join("\n");
            const { MessageAttachment } = require("discord.js");
            const attachment = new MessageAttachment(Buffer.from(archiveData), "archive.txt");
            message.channel.send(`📄 Here’s the archive of the last ${numMessages} messages:`, attachment);
        } catch (error) {
            message.channel.send("❌ Unable to archive messages.");
        }
    }

    // Display server stats
    else if (content === "-stats") {
        await message.delete();
    
        const memberCount = message.guild.memberCount;
        const onlineMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status === "online").size;
        const idleMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status === "idle").size;
        const dndMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status === "dnd").size;
        const offlineMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status === "offline").size;
    
        const roleCount = message.guild.roles.cache.size;
        const channelCount = message.guild.channels.cache.size;
    
        const statsMessage = `
    📊 **Server Stats** 📊
    >------------------------------------<
    
    **Total Members:** ${memberCount}
    **Online Members:** ${onlineMembers}
    **Idle Members:** ${idleMembers}
    **Do Not Disturb Members:** ${dndMembers}
    **Offline Members:** ${offlineMembers}
    **Total Roles:** ${roleCount}
    **Total Channels:** ${channelCount}
    
    >------------------------------------<
    
    ✨ Selfbot crafted by \`@hydra_devx\`
    >------------------------------------<`;
    
        await message.channel.send(statsMessage);
    }
    

    // Send an announcement to a specific channel
    else if (content.startsWith("-announce ")) {
        await message.delete();
        const announcement = content.slice(10).trim();
        if (!announcement) {
            message.channel.send("❌ Please provide an announcement message.");
            return;
        }
        try {
            const announceChannel = message.guild.channels.cache.get("YOUR_ANNOUNCEMENT_CHANNEL_ID");
            if (!announceChannel) {
                message.channel.send("❌ Announcement channel not found.");
                return;
            }
            announceChannel.send(`📢 **Announcement:** ${announcement}`);
        } catch (error) {
            message.channel.send("❌ Unable to send the announcement.");
        }
    }else if (content.startsWith("-userinfo")) {
        // Get the mentioned user or the author if no user is mentioned
        const mentionedUser = message.mentions.users.first() || message.author;
    
        try {
            // Delete the command message
            await message.delete();
    
            // Get user details
            const userID = mentionedUser.id;
            const username = mentionedUser.username;
            const discriminator = mentionedUser.discriminator;
            const createdAt = mentionedUser.createdAt.toDateString(); // Account creation date
            const status = mentionedUser.presence ? mentionedUser.presence.status : 'offline'; // User status
    
            const userInfoMessage = `
    👤 **User Information** 👤
    >------------------------------------<
    
    **Username:** ${username}#${discriminator}
    **User ID:** ${userID}
    **Account Created On:** ${createdAt}
    **Current Status:** ${status}
    
    >------------------------------------<
    
    ✨ Selfbot crafted by \`@hydra_devx\`
    >------------------------------------<`;
    
            await message.channel.send(userInfoMessage);
        } catch (error) {
            console.error("Error sending user info message:", error);
        }
    }
    
});





  
  
client.login(settings.token);

/*
    yay! better selfbot.....
    open source but plagarism and skid === gay
    pls dont just use it and write ur name instead of mine
    that's all enjoy!!!!!
*/
