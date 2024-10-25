

# Discord Selfbot

This is a selfbot for Discord, allowing you to automate tasks and enhance your Discord experience.

## Features

- Automate tasks with custom commands
- Integrate with YouTube API for enhanced functionality

## Requirements

- **Node.js** (version 14 or later)
- **npm** (Node Package Manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Hydradevx/selfbot.git
cd <repository-directory>
```

### 2. Install Dependencies

Run the following command to install all necessary npm packages:

```bash
npm install
```

### 3. Create `settings.json`

In the root directory of the project, create a file named `settings.json`. This file should contain your Discord token and YouTube API key in the following format:

```json
{
    "token": "YOUR_DISCORD_TOKEN",
    "youtubeApiKey": "YOUR_YOUTUBE_API_KEY"
}
```

### How to Get Your Discord Token

1. Open Discord in your browser or desktop app.
2. Press `Ctrl + Shift + I` (or `Cmd + Option + I` on Mac) to open the Developer Tools.
3. Navigate to the **Application** tab.
4. In the left sidebar, find and click on **Local Storage** under the `https://discord.com` section.
5. Look for the `token` key, which will contain your Discord token. Copy the value.

### How to Get Your YouTube API Key

1. Go to the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project or select an existing project.
3. Navigate to the **Library** section and search for "YouTube Data API v3."
4. Enable the API for your project.
5. Go to the **Credentials** tab and click on **Create Credentials**.
6. Choose **API key**. Copy the generated API key.

### 4. Run the Selfbot

After setting up your `settings.json` file, run the selfbot using the following command:

```bash
node index.mjs
```

## Important Notes

- **Use of selfbots may violate Discord's Terms of Service.** Use at your own risk.
- Make sure to keep your `settings.json` file private and never share it with anyone.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

