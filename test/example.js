const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    //ldb.postStat(client.guilds.cache.size);
    console.log('Online!');
});

client.on('message', async (msg) => {
    if(!msg.guild) return;
    if(msg.author.bot) return;
    if(!msg.content.startsWith(prefix)) return;

    let args = msg.content.slice(prefix.length).split(" ");
    let cmd = arsg.shift().toLowerCase();

    /*if(cmd == 'bot') {
        let idBot = args[0];
        let data = await ldb.getBot(idBot);

        return msg.channel.send(data);
    };*/
});

client.login('Your bot token')