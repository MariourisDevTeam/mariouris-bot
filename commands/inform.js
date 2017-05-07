exports.run = (client, message, args) => {
    var announce = message.guild.channels.find("name", "announcements").toString();
    var info = message.guild.channels.find("name", "information").toString();
    var staff = message.guild.channels.find("name", "staff").toString();
    var updates = message.guild.channels.find("name", "updates").toString();
    message.channel.sendMessage("**Mariouris Information**\nAnnouncement Channel: " + announce + "\nStaff List & Information: " + staff + "\nGame, Web, & Software Updates: " + updates + "\nExtra Information: " + info);
};