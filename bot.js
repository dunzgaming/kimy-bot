const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const opus = require('opusscript');

client.on('ready', () => {
console.log('Saya Siap');
});


const prefix = '!kimy.'


client.on('message', async message => {
  
  
  if (message.content === "kimy") {
message.channel.send('!kimy.play(music)');
  }  

 });

client.login(process.env.TOKEN)
