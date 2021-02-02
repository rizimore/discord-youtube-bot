require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const YouTube = require('youtube-node');
const youtube = new YouTube();
youtube.setKey(process.env.YOUTUBE_KEY);

let PREFIX = "-";
let COUNT = 0;
let YOUTUBE_DATA;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
        const [COMMAND_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
        const COMMAND_CONTENT = args.join(' ');

        if (COMMAND_NAME === 'yt') {
            youtube.search(COMMAND_CONTENT, 1, function(error, result) {
                YOUTUBE_DATA = result;
                if (!error) {
                    message.channel.send('https://www.youtube.com/watch?v=' + YOUTUBE_DATA.items[COUNT].id.videoId);
					console.log(COMMAND_CONTENT);
                } else {
                    message.reply('Something is not working fine, contact developer please!');
                }
            });
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
