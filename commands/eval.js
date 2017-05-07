exports.run = (client, message, args) => {
    var config = require("../config.json");
    if(message.author.id !== config.ownerID) return;
    
    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
        else
            return text;
    }
    
    try {
        var code = args.join(" ");
        var evaled = eval(code);
        
        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
        
        message.channel.sendCode("x1", clean(evaled));
    } catch (err) {
        message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    
}