exports.run = (client, message, args) => {
    var fs = require('fs');
    var files = fs.readdirSync('./commands/');
    var fileLength = files.length;
    
    var filesString = files.toString().split(".js");
    message.channel.sendMessage(filesString);
}