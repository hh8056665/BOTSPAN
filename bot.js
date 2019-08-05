const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("465078872266768384")
setInterval(function() {
channel.send(`hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906 hassam1906`);
}, 30)
})

client.login(process.env.BOT_TOKEN);