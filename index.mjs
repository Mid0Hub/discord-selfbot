import { Client } from "discord.js-selfbot-v13";
import { google } from "googleapis";
import settings from "./settings.json" assert { type: "json" };

const client = new Client({ checkUpdate: false });

let afkStatus = false;
let afkReason = '';
let afkStartTime = null;
let spamInterval = null;

// Initialize YouTube API
const youtube = google.youtube({
    version: 'v3',
    auth: settings.youtubeApiKey
});

client.once("ready", () => {
    console.log(`Logged into ${client.user.username}`);
});

client.on("messageCreate", async (msg) => {
    // Ignore messages from other users that don't mention the bot
    if (msg.author.id !== client.user.id) {
        if (afkStatus && msg.mentions.has(client.user)) {
            msg.reply(`I'm currently AFK. Reason: ${afkReason}`);
        }
        return;
    }

    // Check for commands
    const content = msg.content.toLowerCase();

    if (content.startsWith('afk')) {
        afkStatus = true;
        afkReason = content.split(' ').slice(1).join(' ') || 'No reason provided';
        afkStartTime = new Date();
        msg.channel.send(`You are now AFK. Reason: ${afkReason}`);
    } else if (content.startsWith('unafk')) {
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

        msg.channel.send(`You are no longer AFK. You were AFK for ${afkDurationString.trim()}.`);

    }else if (content.startsWith('setpresence')) {
        // Example command to set presence
        const presenceMessage = content.split(' ').slice(1).join(' ');
        if (!presenceMessage) {
            msg.reply("Please provide a status message for presence.");
            return;
        }
        client.user.setPresence({
            activities: [{ name: presenceMessage, type: 'PLAYING' }],
            status: 'online',
        });
        msg.channel.send(`Presence set to: ${presenceMessage}`);
    }
    else if (content.startsWith('clearpresence')) {
        client.user.setPresence({
            activities: [],
            status: 'online',
        });
        msg.channel.send("Presence cleared.");
    } 
     else if (content.startsWith('unban')) {
        const userId = content.split(' ')[1];
        if (!userId) {
            msg.reply("Please provide the ID of the user to unban.");
            return;
        }

        try {
            const unbannedUser = await msg.guild.members.unban(userId);
            msg.reply(`${unbannedUser.username} has been unbanned.`);
        } catch (error) {
            msg.reply("Failed to unban the user. Please check the ID or permissions.");
        }
    } else if (content.startsWith('ping')) {
        const ping = Math.round(client.ws.ping);
        msg.reply(`Pong! Your ping is ${ping}ms.`);
    } else if (content.startsWith('kick')) {
        const userToKick = msg.mentions.users.first();
        if (!userToKick) {
            msg.reply("Please mention a user to kick.");
            return;
        }

        const member = msg.guild.members.cache.get(userToKick.id);
        if (member) {
            await member.kick();
            msg.reply(`${userToKick.username} has been kicked.`);
        } else {
            msg.reply("User not found in this server.");
        }
    } else if (content.startsWith('ban')) {
        const userToBan = msg.mentions.users.first();
        if (!userToBan) {
            msg.reply("Please mention a user to ban.");
            return;
        }

        const member = msg.guild.members.cache.get(userToBan.id);
        if (member) {
            await member.ban();
            msg.reply(`${userToBan.username} has been banned.`);
        } else {
            msg.reply("User not found in this server.");
        }
    } else if (content.startsWith('spam')) {
        const args = content.split(' ');
        const count = parseInt(args[1]);
        const messageToSpam = args.slice(3).join(' ');  // Skip the first 3 words (command, count, interval)
        const interval = parseInt(args[2]);
    
        // Validate inputs
        if (isNaN(count) || count <= 0 || !messageToSpam || isNaN(interval) || interval <= 0) {
            msg.reply("Usage: spam [number] [interval in ms] [message]");
            return;
        }
    
        // Prevent multiple spam actions at once
        if (spamInterval) {
            msg.reply("A spam action is already running. Please wait for it to finish.");
            return;
        }
    
        let spamCount = 0;
        spamInterval = setInterval(() => {
            if (spamCount < count) {
                msg.channel.send(messageToSpam);
                spamCount++;
            } else {
                clearInterval(spamInterval);
                spamInterval = null;
            }
        }, interval);  // Use the user-specified interval
    }
    else if (content.startsWith('pfp')) {
        const userToCheck = msg.mentions.users.first() || msg.author;
        msg.channel.send(`${userToCheck.displayAvatarURL({ dynamic: true })}`);
    } else if (content.startsWith('yt')) {
        const searchQuery = content.split(' ').slice(1).join(' ');
        if (!searchQuery) {
            msg.reply("Usage: yt [search term]");
            return;
        }

        try {
            const res = await youtube.search.list({
                part: 'snippet',
                q: searchQuery,
                maxResults: 5,
                order: 'relevance',
                type: 'video'
            });

            if (res.data.items.length > 0) {
                const video = res.data.items[0];
                const videoTitle = video.snippet.title;
                const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
                msg.channel.send(`Found a video: **${videoTitle}** - ${videoUrl}`);
            } else {
                msg.reply("No videos found.");
            }
        } catch (error) {
            console.error(error);
            msg.reply("An error occurred while searching for videos.");
        }
    } else if (content.startsWith('gaycheck')) {
        const userToCheck = msg.mentions.users.first();
        if (!userToCheck) {
            msg.reply("Usage: gaycheck @user");
            return;
        } else if (content.startsWith('info')) {
        const guild = msg.guild;
        const memberCount = guild.memberCount;
        const owner = guild.members.cache.get(guild.ownerId);
        const createdAt = guild.createdAt.toDateString();

        msg.reply(`**Server Info:**
        - **Name:** ${guild.name}
        - **ID:** ${guild.id}
        - **Owner:** ${owner.user.username} (${guild.ownerId})
        - **Members:** ${memberCount}
        - **Created At:** ${createdAt}`);
    } else if (content.startsWith('help')) {
        msg.reply(`Here are the available commands:
     - afk [reason]: Set your AFK status.
     - unafk: Remove your AFK status.
     - ping: Check your ping.
     - kick @user: Kick a mentioned user.
     - ban @user: Ban a mentioned user.
     - unban [user ID]: Unban a user by their ID.
     - spam [number] [interval in ms] [message]: Start spamming a message a specified number of times with a user-specified interval between messages.
     - pfp [@user]: Get the profile picture of the mentioned user (or yourself if not mentioned).
     - yt [search term]: Search for YouTube videos and get the first result.
     - serverinfo: Get information about the server.
    - setpresence [status]: Set your game/activity presence.
     - clearpresence: Remove your current game/activity presence.`);
    }
});

client.login(settings.token);
