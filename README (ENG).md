# Bot Connect From Discord Introduction

Welcome to **Bot Connect From Discord**, a pet bot with fun features and designed using JavaScript. This bot utilizes the [discord.js](https://discord.js.org/) library to seamlessly integrate with Discord.

## What is Bot Connect From To be?

Bot Connect From To be is a unique bot that allows users to connect and play games within Discord. It offers exciting features, including:

### Main Features

- **Game Play**: Join and connect with others in Discord games.
- **Fast Response**: The bot responds quickly to commands, ensuring a smooth experience.
- **Easy Setup**: Built with JavaScript and [discord.js](https://discord.js.org/), making it easy to design and set up.

## Installation Guide

### Download the Project from GitHub

- **Method 1**: Download from GitHub page
  - Go to the project's GitHub page.
  - Click the **"Code"** button and select **"Download ZIP"** to download the source code as a ZIP file.
  - Extract the ZIP file and save it to your desired directory.
  - Refer to [how to extract ZIP files](https://www.youtube.com/results?search_query=c%C3%A1ch+gi%E1%BA%A3i+n%C3%A9n) for more details.

- **Method 2**: Clone the repository using Git
  - Open terminal or command prompt.
  - Navigate to the directory where you want to save the project.
  - Run the command to clone the repository:
    ```sh
    git clone <URL_repository>
    ```
    (Replace `<URL_repository>` with the repository URL on GitHub, e.g., `https://github.com/username/repository.git`).
  - Navigate into the project directory:
    ```sh
    cd <folder_name>
    ```
    (Replace `<folder_name>` with the name of the project directory).

### Install IDE or Text Editor

- **Using Visual Studio Code (VS Code)**:
  - Download and install from the [Visual Studio Code](https://code.visualstudio.com/) website.
  - Set it up to support JavaScript development.
  - See [installation guide here](https://www.youtube.com/results?search_query=c%C3%A1ch+c%C3%A0i+vs+code).
  - VS Code is recommended due to its ease of use.

- **Using Other Text Editors or IDEs**:
  - WebStorm
  - Sublime Text
  - Atom
  - Brackets
  - Eclipse
  - Notepad++

### Set Up Environment

- **Install Node.js**:
  - Download and install Node.js from the [Node.js](https://nodejs.org/) website. Choose the LTS (Long Term Support) version.
  - Check the installation by opening terminal or command prompt and running:
    ```sh
    node -v
    ```
    and
    ```sh
    npm -v
    ```
  - Refer to [how to install Node.js](https://www.youtube.com/results?search_query=c%C3%A1ch+c%C3%A0i+%C4%91%E1%BA%B7t+m%C3%B4i+js+%2F+how+to+install+js+inviroment) for more details.

- **Open Project in VS Code**:
  - **Method 1**:
    - Open Visual Studio Code (VS Code).
    - Select **"File"** from the top menu.
    - Choose **"Open Folder..."**.
    - Select the project folder and click **"Select Folder"** (or **"Open"** on macOS).
  - **Method 2**:
    - Drag and drop the project folder from File Explorer (Windows) or Finder (macOS) into the VS Code window.
  - **Method 3**:
    - Open the integrated terminal in VS Code by pressing `Ctrl + `` (or `Cmd + `` on macOS).
    - Navigate to the project folder using `cd` command:
      ```sh
      cd <folder_name>
      ```
    - Open the project in VS Code with:
      ```sh
      code .
      ```
  - **Method 4**:
    - Open File Explorer (Windows) or Finder (macOS).
    - Navigate to the project folder.
    - Right-click on the folder.
    - Select **"Open with Code"**.

## Edit Bot Status

**Edit the file `bot.mjs`**

- **Status**:
  - `status: 'online'`: Bot is active (green).
  - `status: 'idle'`: Bot is inactive or waiting (yellow).
  - `status: 'dnd'`: Bot is busy, do not disturb (red).
  - `status: 'invisible'`: Bot is invisible, not showing status.

- **Activity**:
  - `type: ActivityType.Playing`: Bot is playing a game.
  - `type: ActivityType.Listening`: Bot is listening to a song.
  - `type: ActivityType.Watching`: Bot is watching a video.
  - `type: ActivityType.Streaming`: Bot is streaming live.
  - `type: ActivityType.Competing`: Bot is participating in a competition.

- **Custom Status**:
  - `name`: The name of the status you want to display, e.g., "waiting for love".
  - `type`: The type of activity, e.g.:
    - `ActivityType.Playing` to play a game.
    - `ActivityType.Listening` to listen to music.
    - `ActivityType.Watching` to watch a video.
    - `ActivityType.Streaming` to stream live.
    - `ActivityType.Competing` to participate in a competition.
  - `url`: URL to use when `type` is `ActivityType.Streaming`. Leave empty if not streaming.

 ```js 
  client.user.setPresence({
    status: 'idle', // Replace with the desired status: 'online', 'idle', 'dnd', 'invisible'
    activities: [{
      name: 'waiting for love', // Replace with the desired status name
      type: ActivityType.Watching, // Replace with the desired activity type: PLAYING, LISTENING, WATCHING, STREAMING, COMPETING
      url: '' // Add URL if type is STREAMING, otherwise leave empty
    }],
  });
```
## Get and Replace TOKEN

### Get Discord TOKEN

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Log in with your Discord account if not logged in.
3. Select your bot application from the list.
4. Navigate to the **Bot** section in the left menu.
5. Click the **Copy** button under the **TOKEN** section to copy your TOKEN. **Note**: Do not share this TOKEN with anyone as it allows others to control your bot.

### Enable Required Intents

1. In the same page of your bot application, go to the **Bot** section.
2. Find the **Privileged Gateway Intents** section.
3. Check the **MESSAGE CONTENT INTENT** box (to ensure the bot can read message content).
4. Check the **GUILD PRESENCES INTENT** box (to ensure the bot can monitor user presence status).
5. Check the **GUILD MEMBERS INTENT** box (to ensure the bot can access member details).

## Run the Application

### Install Dependencies

1. Open terminal or command prompt and navigate to the project directory.
2. Run the command to install dependencies:

    ```sh
    npm install
    ```
