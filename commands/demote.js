const config = require("../config.json");
exports.run = (client, message, args) => {
    let head = message.guild.roles.find("name", "Head-Admin");
    let admin = message.guild.roles.find("name", "Admin");
    let mod = message.guild.roles.find("name", "Moderator");
    let train = message.guild.roles.find("name", "Trainee");
    let recruit = message.guild.roles.find("name", "Recruiter");
    
    if (!message.member.roles.has(admin.id)) {
        return message.reply("Mr.Plebiano, you aren't high enough to demote someone!");
    }
    if (message.mentions.users.size === 0) {
        return message.reply("Please mention a user to demote").catch(console.error);
    }
    let promote = message.guild.member(message.mentions.users.first());
    if (!promote) {
        return message.reply("That user isn't valid");
    }
    if (message.author.id == config.ownerID && message.content.includes("ownerdemote")) {
        promote.removeRole(train).catch(console.error);
        promote.removeRole(mod).catch(console.error);
        promote.removeRole(admin).catch(console.error);
        promote.removeRole(head).catch(console.error);
        promote.removeRole(recruit).catch(console.error);
        return message.reply(`You have successfully demoted ${promote}.`).catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
        return message.reply("I don't have the permission MANAGE_ROLES.").catch(console.error);
    }
    if (!promote.roles.has(mod.id)) {
        if (promote.roles.has(train.id)) {
            promote.removeRole(train).catch(console.error);
            return message.reply(`${promote} was successfully demoted.`).catch(console.error);
        }
    } else if (promote.roles.has(mod.id)) {
        if (!message.member.roles.has(admin.id)) {
            return message.reply("You aren't high enough to demote moderators!");
        } else if (message.member.roles.has(admin.id)) {
            promote.removeRole(mod).catch(console.error);
            return message.reply(`${promote} was successfully demoted.`).catch(console.error);
        }
    }

    
};