import {
  Client,
  GatewayIntentBits,
  ActivityType,
  PermissionFlagsBits
} from 'discord.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
});

client.once('ready', () => {
  console.log(`Ready!`);
  console.log(`Bot Started`);
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
    status: 'idle', // Có thể thay thế: online, idle, dnd, invisible
    activities: [{
        name: 'waiting for love', //có thể thay thế bằng bất cứ gì bạn muốn
        type: ActivityType.Watching, // có thể thay thế: PLAYING, LISTENING, WATCHING, STREAMING, COMPETING
        url: '' //thêm url stream nếu type đặt là STREAMING còn không bỏ trống
    }],
  });

});

const dictionaryPath = path.join(__dirname, 'text', 'tudien.txt');
let dictionary = [];
fs.readFile(dictionaryPath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Không thể đọc file từ điển. Hãy kiểm tra lại file từ điển đã có trong folder text chưa:', err);
    console.error('STOP BOT');
    process.exit();
  } else {
    dictionary = data.split('\n').map(word => word.trim().toLowerCase());
  }
});

let wordChainChannel = null;
let lastWord = '';
let lastUser = null;
let usedWords = new Set();
let currentWord = '';

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  const content = message.content.trim().toLowerCase();
  
  if (content.startsWith('!!noitu')) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator) && 
        !message.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
      await message.channel.send('Bạn cần có quyền hạn của \`Administrator\` hay \`ManageMessages\` hoặc các quyền hạn cao hơn để sử dụng lệnh này.');
      await message.channel.send('Hãy bảo Admin server của bạn sử dụng lệnh \`!!noitu\` để bắt đầu.');
      return;
    }
    
    const args = content.split(' ');
    const channelMention = args[1];
    if (channelMention) {
      const channel = message.guild.channels.cache.get(channelMention.replace(/[<#>]/g, ''));
      if (channel) {
        wordChainChannel = channel.id;
        lastWord = ''; 
        lastUser = null; 
        usedWords.clear(); 
        currentWord = '';
        await message.reply('Cài đặt thành công.');
        await channel.send('Game start, nhập một từ bất kỳ để bắt đầu.');
      } else {
        await message.reply('Không tìm thấy kênh.');
      }
    } else {
      await message.reply('Vui lòng nhập ID hay đề cập một kênh bất kì.');
    }
  } else if (content.startsWith('!!resetnoitu')) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator) && 
        !message.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
      await message.channel.send('Bạn cần có quyền hạn của \`Administrator\` hay \`ManageMessages\` hoặc các quyền hạn cao hơn để sử dụng lệnh này.');
      return;
    }

    if (wordChainChannel) {
      const channel = client.channels.cache.get(wordChainChannel);
      if (channel) {
        await channel.send('Trò chơi nối từ đã được reset. Bạn cần thiết lập lại trò chơi bằng lệnh \`!!noitu\`.');
      }
      wordChainChannel = null;
      lastWord = '';
      lastUser = null;
      usedWords.clear();
      currentWord = '';
      await message.reply('Trò chơi nối từ đã được reset thành công.');
    } else {
      await message.reply('Không có trò chơi nối từ nào được thiết lập. Vui lòng sử dụng lệnh \`!!noitu\` để thiết lập trò chơi.');
    }
  } else if (message.channel.id === wordChainChannel) {
    if (message.author.id === lastUser) {
      await message.react('❌');
      await message.reply('Bạn không thể nối từ liên tiếp. Hãy để người khác chơi trước.');
      return;
    }

    if (usedWords.has(content)) {
      await message.react('❌');
      await message.reply('Từ này đã được sử dụng. Vui lòng chọn từ khác.');
      return;
    }

    if (!lastWord) {
      if (dictionary.includes(content)) {
        lastWord = content;
        lastUser = message.author.id;
        usedWords.add(content);
        currentWord = content; 
        await message.react('✅');
      } else {
        await message.react('❌');
        await message.reply('Từ không đúng hoặc không nằm trong từ điển hoặc chưa được cập nhật.');
      }
    } else {
      if (content.startsWith(lastWord.slice(-1)) && dictionary.includes(content)) {
        lastWord = content;
        lastUser = message.author.id;
        usedWords.add(content);
        currentWord = content; 
        await message.react('✅');
      } else if (!dictionary.includes(content)) {
        await message.react('❌');
        await message.reply('Từ không đúng hoặc không nằm trong từ điển hoặc chưa được cập nhật.');
      } else {
        await message.react('❌');
        await message.reply(`Từ của bạn phải bắt đầu bằng chữ "${lastWord.slice(-1).toUpperCase()}".`);
      }
    }
  }
});

client.on('messageDelete', async (message) => {
  if (message.channel.id === wordChainChannel && message.content.toLowerCase() === currentWord) {
    await message.channel.send(`Từ vừa được nối là \`${currentWord}\`. Hãy nối từ tiếp theo.`);
  }
});

client.on('messageUpdate', async (oldMessage, newMessage) => {
  if (oldMessage.channel.id === wordChainChannel && oldMessage.content.toLowerCase() === currentWord) {
    await newMessage.channel.send(`Từ vừa được nối là \`${currentWord}\`. Hãy nối từ tiếp theo.`);
  }
});

client.login('YOUR_BOT_TOKEN'); //thay thế YOUR_BOT_TOKEN thành token bot của bạn
