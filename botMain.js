const Discord = require("discord.js");const bot = new Discord.Client();const fs = require("fs");const config = ("config.json");


bot.login('Mjk5NzYwMTAyODA0NTUzNzI4.C9mJZQ.XSdcvLeBjuUAB4rIRriTpKd7KBA');

let prefix = ">";







bot.on("ready", () => {console.log("Bot Active");bot.setGame(prefix + "help for help");});bot.on("message", (msg) => {
    if (!msg.content.startsWith(prefix)) return;
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + "help")) {
        
    }
                                                                                                                      
                                                                                                                      
});


























//TO-DO PLANS
/*
Make cmd handler
Make command files
Put seperate commands in modules
Make an enabled/disable script for the modules






































*/
