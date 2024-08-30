# Gender Introduction shared

Greet happy Friend arrive with **Bot Connect From Discord**, a pet bot taste and soy sauce work Okay design plan to lift High the Reference family belong to People use in machine Discord owner of you ! this bot Okay release develop equal language JavaScript language , history use letters discord.js library ]( https://discord.js.org/) to product fit with Discord.

## Bot Connect From To be What ?

Bot Connect From To be a toxic bot unique give permission People use Reference family enter game play connect from , in there the from Right Okay conclude connect based on above letter female last together belong to from before To be one way great great to try challenge Friend raft and check check Technically power from vocabulary in When fun draw above machine owner belong to Friend .

### Calculate Power Main

- ** Game Play Connect From :* * Join enter game play in there People play Right connect from with each other . Love bridge To be from new Right catch head equal letter female last together belong to from before !
- ** Soy sauce Author Real Time :* * Bot response return fast fast with the command , guarantee tell spread test smooth but and animal taste give socks chief People use .
- ** Setting Easy Easy :* * Okay build build With JavaScript and [discord.js](https://discord.js.org/), bots are easy to easy design set up and product fit enter machine owner belong to Friend .
-
## Wallet Seduction About the Orders

- `!! noitu ` – Catch head game play new .
- `!! resetnoitu ` – Settings again game play .
- Will access Japan more ...

# Setting
- ** Download Project from GitHub machine :**
- ** Method 1 **: From page belong to attend sentence on GitHub:
- Access access GitHub page attend judgment
- Click enter **"Code"** button and Select **"Download ZIP"** to load about whole set code source below ZIP file format .
- Access access enter letters item contains download file down
- Prize zip file letters item expect want above machine calculate belong to Friend .
- Find understand [ how ] prize compressed]( https://www.youtube.com/results?search_query=c%C3%A1ch+gi%E1%BA%A3i+n%C3%A9n)

- ** Method 2 **: Use Use Git to clone the repository:
- Open terminal or command prompt.
- Thing direction arrive letters item place Friend want save attend judgment
- Run command after To clone repository:
sh
git clone < URL_repository >
```
(Replace `< URL_repository >` with the repository URL on GitHub , for example example : `https://github.com/username/repository.git`).
- Move enter letters item attend sentence fit cloned :
sh
cd <folder_name>
```
(Replace ` <folder_name> ` with name letters item belong to attend judgment ).
- **Install IDE or Text Editor :* *
- History Using Text Editor Visual Studio Code (VS Code):
- Load and install put from main website [Visual Studio Code]( https://code.visualstudio.com/ ).
- Setting the convenient benefit open wide need design to support support release JavaScript development .
- See details way install set VS Code [ at here]( https://www.youtube.com/results?search_query=c%C3%A1ch+c%C3%A0i+vs+code+%2F+how+to+install+vs+code).
- Recommendation encourage history use VS Code because It easy history use :))
- History use Other Text Editors or IDEs If Friend see edema fit :
- WebStorm
- Sublime Text
- Atom
- Brackets
- Eclipse
- Notepad++

- ** Setting lip school :* *
- Install Node.js:
- Load and install install Node.js from main website [ Node.js ]( https://nodejs.org/). Select session LTS (Long Term Support) version to sure tell calculate fine determined
- Check check install set Node.js by way open terminal or command prompt and type command :
sh
node -v
```
      and
sh
      npm -v
```
- Sure tell that the session copy of Node.js and npm (Node Package Manager) already Okay install put wall labour .
- Reference more about way install put lip school [ at] here]( https://www.youtube.com/results?search_query=c%C3%A1ch+c%C3%A0i+%C4%91%E1%BA%B7t+m%C3%B4i+js+%2F+how+to+install+js+inviroment)
- ** Access access attend sentence on VS Code:* *
- ** Method 1 **:
- Open Visual Studio Code (VS Code).
- Select **"File"** from the menu above together .
- Select **"Open Folder..."**.
- Thing direction arrive letters item contain attend sentence but Friend Satisfied load about or clone from GitHub.
- Select letters item attend sentence and click go to **"Select Folder"** ( or **"Open"** on macOS).
- Attend sentence belong to Friend will Okay open in VS Code.

- ** Method 2 **:
- Drag and drop letters item attend sentence from File Explorer (Windows) or Finder (macOS) to door VS Code window .
- VS Code will on one's own dynamic open letters item attend sentence and show market content of It in deliver area

- ** Method 3 **:
- Open terminal fit in VS Code using way Press `Ctrl + `` ( or ` Cmd + `` on macOS).
- History use `cd` command to thing direction arrive letters item contain attend judgment
sh
cd <folder_name>
```
- Run command after to open letters item attend sentence in VS Code:
sh
      code .
```
- Attend sentence will Okay open in one door book new of VS Code.

- ** Method 4 **:
- Open File Explorer (Windows) or Finder (macOS).
- Thing direction arrive letters item contain attend judgment
- Click mouse Right enter letters item attend judgment
- Select **"Open with Code"** from the menu.
- Directory attend sentence will Okay open in VS Code.
- Find understand more about way [ history using VS Code]( https://www.youtube.com/results?search_query=c%C3%A1ch+m%E1%BB%9F+th%C6%B0+m%E1%BB%A5c+tr%C3%AAn+VS+code)
# Edit fix status state
** Access access go to file ` bot.mjs` **
- ** Edit fix status status of bot:* *
- ** Status attitude :* *
- `status: 'online'`: Bot is active dynamic jar usually ( green) leaves ).
- `status: 'idle'`: Bot is not active dynamic or in progress wait wait ( gold ).
- `status: ' dnd '`: Bot busy , no want bag do annoying ( red ).
- `status: 'invisible'`: Bot is invisible , no show market status state direct line

- ** Activity action :* *
- `type: ActivityType.Playing `: Bot playing play one game play .
- `type: ActivityType.Listening `: Bot is listen one rank What there .
- `type: ActivityType.Watching `: Bot is according to follow one female What there .
- `type: ActivityType.Streaming `: Bot running release direct next .
- `type: ActivityType.Competing `: Bot code Reference family enter one life exam or the sue

- **Custom Status:* *
- `name`: Name status state Friend want show market , wallet example : "waiting for love".
- `type`: Type active dynamic belong to status change position with one in the price treat after :
- ` ActivityType.Playing ` to play one game play .
- ` ActivityType.Listening ` to listen one female What there .
- ` ActivityType.Watching ` to according to follow one female What there .
- ` ActivityType.Streaming ` to release direct next .
- ` ActivityType.Competing ` to Reference family enter one life exam or the sue
- ` url `: URL to history use when `type` is ` ActivityType.Streaming` . If Are not must `Streaming`, field This Have body cancel drum .

js
client.user.setPresence ( {
status: 'idle', // Replace with status state Friend want : 'online', 'idle', ' dnd ', 'invisible'
activities: [{
name: 'waiting for love', // Replace with name status state Friend want show market
type: ActivityType.Watching , // Replace with type active dynamic Friend want : PLAYING, LISTENING, WATCHING, STREAMING, COMPETING
url: '' // Add URL if type active dynamic is STREAMING, if Are not then to drum
}],
});
```
## Take and replace TOKEN

### Get Discord TOKEN

1. Access access Go to [Discord Developer Portal]( https://discord.com/developers/applications).
2. Post enter equal talent Discord account of Friend If Not yet post enter
3. Select application use bot of Friend from name book the application use
4. Enter **Bot** section in the side menu left .
5. Click enter **Copy** button below **TOKEN** item to Star copy TOKEN of you . **Note :* * Do not share this TOKEN with any anyone because It Have body give permission People other thing control bot of Friend .

### Enable Intents needed design

1. In the same page belong to application use bot, transfer arrive **Bot** section .
2. Find **Privileged Gateway Intents** section .

- **Presence Intent:* *
- Enable **Presence Intent** for the bot to have body receive the the case access Japan status state People use .
- Note : When your bot Friend reach 100 or much more than server, work turn on calculate power This will Love bridge body bright and get high browse from Discord. See more details [ at here]( https://discord.com/developers/docs/topics/gateway#presence-update).

- **Server Members Intent:* *
- Enable **Server Members Intent** for the bot to have body receive the the case link mandarin arrive wall pill in server
- Note : When your bot Friend reach 100 or much more than server, work turn on calculate power This will Love bridge body bright and get high browse from Discord. See more details [ at here]( https://discord.com/developers/docs/topics/gateway#guild-membership-screening).

- **Message Content Intent:* *
- Enable **Message Content Intent** for the bot to have body receive message content in almost run out of messages
- Note : When your bot Friend reach 100 or much more than server, work turn on calculate power This will Love bridge body bright and get high browse from Discord. See more details [ at here]( https://discord.com/developers/docs/topics/gateway#message-content-intent).

### Replace TOKEN into code source

1. Open file code source of bot ( wallet ) example : ` bot.mjs` ).
2. Find current contains ` client.login ('YOUR_BOT_TOKEN' );` .
3. Replace `'YOUR_BOT_TOKEN'` with the TOKEN you want Friend Satisfied Star copy from Discord Developer Portal:

js
client.login ('YOUR_BOT_TOKEN'); // Replace YOUR_BOT_TOKEN with your bot token Friend

```
## Way invite bot to discord server

### 1. Create bot invitation URL

1. Access access Go to [Discord Developer Portal]( https://discord.com/developers/applications).
2. Post enter equal talent Discord account of Friend If Not yet post enter
3. Select application use bot of Friend from name book the application use
4. In the side menu left , select **OAuth2**.
5. Select the **URL Generator** tab below OAuth2 part .

### 2. Structure image right and scope

1. ** Select Scopes : * *
- Fight sign select **bot**. Here To be scope required design to add bot to server

2. ** Select Bot Permissions : * *
- In the **Bot Permissions** section , select the right which bot of Friend need to active dynamic . wallet example :
- `Send Messages`: To send message
- `Read Message History`: To read calendar message history
- `Manage Messages`: To manage message management ( delete , pin , etc.).
- `View Channels`: To see the channel .
- ``Attach Files``: To send file attach included
Reactions` : application ) more expression have a cold enter the messages in the channel that bot has right access access
- Select the right other If need .
- Recommendation encourage select `Administrator` rights

### 3. Create and Star copy URL

1. After Satisfied structure image the scope and right , roll down below to see bot invitation URL create go out.
2. Copy this URL .

### 4. Invite bot to server

1. Open one program web browsing and paste the URL Friend Satisfied Star copy enter bar land only .
2. You will Okay Love bridge select server where Friend want invite bot in
3. Select server from name book drop down but Friend Have right manage reason ( right) manage treat or right soy sauce equivalent ).
4. Click go to **Authorize** to send word invite bot
5. Complete socks too program equal way solve CAPCHA if Have Love bridge .

### 5.Check check right of bot
- Sure tell bot yes enough right access grant enter the channel .
- Sure tell bot yes body view message ,more reflect application ,...

## Open Terminal and install put npm packages on Visual Studio Code

### 1. Open Terminal in Visual Studio Code

1. ** Open Visual Studio Code**:
- Start Visual Studio Code from Desktop or from the Start menu (Windows) / Applications (macOS).

2. ** Open Terminal **:
- ** Method 1 **: Use use key turn off :
- Press `Ctrl + `` ( backtick key , located right below Esc key on table key ) to open terminal
- ** Method 2 **: Use Use menu:
- Go to the **Terminal** menu in the bar labour tool above together .
- Select **New Terminal** from name book drop down .

### 2. Installation npm packages

1. ** Confirm get Node.js and npm Satisfied Okay install put **:
- In terminal, type the command after to check check session Node.js version and npm :
```bash
     node -v
     npm -v
     ```
- If Friend see session information version meaning is Node.js and npm Satisfied Okay install set . If No , friend need install install Node.js from [ main site method ]( https://nodejs.org/).

2. ** Article direction arrive letters item attend sentence **:
- History use `cd` command to thing direction arrive letters item contain attend sentence belong to you . Wallet example :
bash
cd project_directory_path
```

3. ** Settings packages needed set **:
- Sure tell that Friend Satisfied Have one ` package.json` file in letters item attend case . File This contain name book packages that Friend need install put .
- Run command after to install put socks chief packages are paralysis list in ` package.json` :
bash
     npm install
```
- If Friend want install put a specific package body , history use command :
bash
     npm install -package name
```
     Wallet example , to install install `discord.js`, you will run :
bash
     npm install discord.js
```

4. ** Check check packages have been install put **:
- The packages will Okay install put in letters the ` node_modules ` directory and name book The packages will Okay access Japan in ` package.json` and `package - lock.json` files .

### 3. Activity Test Dynamic

- ** Check Packages Already Installed Install:* *
- Friend Have body check check packages have been Okay install put equal command :
bash
    npm list
```
- Command This will paralysis list socks chief packages and session copy belong to they .

- ** Check Session Node.js version and npm :* *
- To sure tell Friend in progress history use session Node.js version and npm yes , you Have body check check session copy belong to they equal the command after :
bash
node -v
    npm -v
```
## Direction Guide History Use Terminal To Run Discord Bot Using Node.js On VS Code

### 1. Open Attend Judgement and Terminal

1. ** Open VS Code:* *
- Start Visual Studio Code on machine calculate belong to Friend .

2. ** Open Attend Verdict : * *
- Open attend Discord bot project Friend equal way select **File** -> **Open Folder...** and thing direction arrive letters item contain attend judgment

3. ** Open Terminal:* *
- Press nest fit Ctrl + `` ( accent mark ) key mysterious ) to Open Terminal in VS Code.
- Or Friend Have body open Terminal with way Go to menu **Terminal** -> **New Terminal**.

### 2. Run Discord Bot

1. ** Transfer Go to Folder Attend Verdict : * *
- If Friend not in letters item attend sentence belong to me , please history use `cd` command in Terminal to transfer arrive letters item contain attend sentence :
bash
cd project_directory_path
```

2. ** Run Bot By Node.js:* *
- To start run a Discord bot, you history use `node` command to run main file belong to bot.File main is ` bot.mjs` Wallet example :
bash
node bot.mjs
```
** or **
bash
     node .
```
- After command This Okay real exam , bot of Friend will active dynamic and Friend will see information newspaper status state in Terminal ( if bot is enabled) structure image to print the status state When run ).

### 3. Activity Test Dynamic Of Bot

1. ** Check Notification From Bot:* *
- In Terminal, you will see the current information newspaper when bot of Friend start run wall public limit like :
```
Ready!
Bot Started
Logged in as BotName#1234!
```

2. ** Conclusion Connect Bot To Discord Server:**
- Sure tell that Friend Satisfied add bot of me enter Discord server by way create an invitation URL and grant right for bots
- When the bot runs wall work , it will catch head active dynamic on the server Friend Satisfied invite It enter .

3. ** Stop Bot:* *
- If Friend want stop bot, you Have body press nest fit `Ctrl + C` key in Terminal.

### 4. Debugging and Process Lee Error

- ** Error Check : * *
- If the bot does not active dynamic like expect wait or meet error , the information newspaper error will export presently in Terminal. You Have body check check error to know need fix error any .

- ** Edit Fix Code Error :* *
- If meet error , please adjust fix code in the bot file you , after there run again command ` node bot.mjs` to start dynamic bot again .

### 5. Self Dynamic Run Bot (Optional)

- If Friend want bot of me on one's own dynamic run again When Have replace change , you Have body history use labour tool like ` nodemon `. To install set ` nodemon `, please run command :
bash
  npm install -g nodemon
```
- Then you Have body start bot by command
```
  nodemon bot.mjs
```
- Command This will on one's own dynamic start dynamic bot again each When Friend replace change code
# Conclude fruit
- After run ` node . ` on Terminal in VS Code then Friend will see bot online
- Run command `!! noitu ` to install put ,
- Run command ` !! resetnoitu` to reset connection from .
# Source - Copyright
- [ Source from dictionary ]( https://github.com/dwyl/english-words)
- [Dictionary source]( https://github.com/dwyl/english-words)
- Thanks for the documentation
# FAQ

<details>
<summary> How Open Terminal on VS Code</summary>
View direction lead [ at here ]( https://youtu.be/cDsXZ_PEDGk?si=k8pnks03kRx8-0QS)
</details>

<details>
<summary> How Install VS Code</summary>
View direction lead [ at here]( https://www.youtube.com/results?search_query=c%C3%A1ch+c%C3%A0i+vs+code+%2F+how+to+install+vs+code)
</details>

<details>
<summary> How install lip field </summary>
View direction lead [ at here]( https://www.youtube.com/results?search_query=c%C3%A1ch+c%C3%A0i+%C4%91%E1%BA%B7t+m%C3%B4i+js+%2F+how+to+install+js+inviroment)
</details>

# How to host bot (bot online 24/7)
- Hosting
- ** History use Machine Fish Server Human ( for example) example: machine calculate belong to Friend ,...)**
- ** Machine calculate fish person :* * You Have body run Discord bot from machine calculate fish core belong to me This Love bridge Friend Right hold machine calculate belong to me turn on and conclude connect with internet 24/7
- ** Advantages Score :* * No lost hosting fee
- ** Disadvantages Points : * * Machine calculate need Right run link custom
- ** History use Pandemic Cloud Hosting **
- ** Advantages Score :* * No need Right run above machine but run on the cloud
- ** Disadvantages Points : * * Need Right pay fee ( yes ) some free hosting fee )
- ** History use Pandemic VPS Service (Virtual Private Server)* *
- ** Advantages Score : * * Depends adjust tall , talented original private , ability power open wide , stable determine and trust , authority access root access
- ** Disadvantages Points : * * Cost tall , love bridge manage server management and ants awake Technically technique , need dark advantage chemical , risk ro tell honey If Are not tell maintain correct way .
  - Cách host
     - Tham khảo [cách host bot discord free](https://www.youtube.com/results?search_query=how+to+host+a+discord+bot+24%2F7+for+free&sp=CAI%253D)
     - Tham khảo [hosting bot discord free](https://www.google.com/search?q=hosting+bot+discord+free&rlz=1C1GTPM_enVN1124VN1124&oq=hosting+bot+discord+free&gs_lcrp=EgZjaHJvbWUyCwgAEEUYExg5GIAEMgoIARAAGBMYFhgeMgoIAhAAGBMYFhgeMgoIAxAAGBMYFhgeMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg80gEHNDcyajBqOagCALACAQ&sourceid=chrome&ie=UTF-8)

# Phiên bản
| Version| Content content|Date |
|-------|--------|----|
|1.0. 0 | New Upload|August 22, 2024|

# Background block support support
| Background block | Yes | No |
|-------------------|----|-------|
| IOS | | ❌ |
| Android | | ❌ |
| Window       | ✔️  |       |
| MacOS       | ✔️  |       |
| Linux       | ✔️  |       |
