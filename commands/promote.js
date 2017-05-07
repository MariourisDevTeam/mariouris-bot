exports.run = (client, message, args) => {
    let head = message.guild.roles.find("name", "Head-Admin");
    let admin = message.guild.roles.find("name", "Admin");
    let mod = message.guild.roles.find("name", "Moderator");
    let train = message.guild.roles.find("name", "Trainee");
    let recruit = message.guild.roles.find("name", "Recruiter");
    if (!message.member.roles.has(admin.id)) {
        return message.reply("Mr.Plebiano, you aren't high enough to promote someone!");
    }
    if (message.mentions.users.size === 0) {
        return message.reply("Please mention a user to promote").catch(console.error);
    }
    let promote = message.guild.member(message.mentions.users.first());
    if (!promote) {
        return message.reply("Thar user isn't valid");
    }
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
        return message.reply("I don't have the permission MANAGE_ROLES.").catch(console.error);
    }
    if (!promote.roles.has(mod.id)) {
        if (!promote.roles.has(train.id) && !message.member.roles.has(recruit.id)) {
            return message.reply("You aren't high enough to recruit staff!");
        } else if (promote.roles.has(train.id)) {
            promote.addRole(mod).catch(console.error);
            return message.reply(`${promote} was successfully promoted.`).catch(console.error);
        } else if (!promote.roles.has(train.id) && message.member.roles.has(recruit.id)) {
            promote.addRole(train).catch(console.error);
            return message.reply(`${promote} was successfully promoted.`).catch(console.error);
        }
    } else if (promote.roles.has(mod.id)) {
        if (!message.member.roles.has(head.id)) {
            return message.reply("You aren't high enough to promote moderators!");
        } else if (message.member.roles.has(head.id)) {
            promote.addRole(admin).catch(console.error);
            return message.reply(`${promote} was successfully promoted.`).catch(console.error);
        }
    }
};