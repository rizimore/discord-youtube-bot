require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = "-";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
        const [COMMAND_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);

        if (COMMAND_NAME === 'yt') {
            console.log(args);
        }
    }
});

client.login('ODA1NzExMjY1OTUwMzM0OTk3.YBe3Fw.bWZbOcoRuLtKjK1VVmjOAIjhmtw');
