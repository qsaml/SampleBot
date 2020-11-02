const Discord = require('discord.js');
const { API_TOKEN, prefix } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('We are live!');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else if (msg.content == `${prefix}the`) {
    msg.channel.send('haha the funny')
  }
});

client.login(API_TOKEN);