const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  "https://media.giphy.com/media/97q4K1N3uQagoUbCSF/giphy.gif",
  "https://media.giphy.com/media/hcyB6qTEsMwu13XL28/giphy.gif",
  "https://media.giphy.com/media/oRMM3Girl7fB6KQAmW/giphy.gif",
  "https://media.giphy.com/media/QZKu9HRlsTwlyoDejL/giphy.gif",
  "https://media.giphy.com/media/HjR3hhDx99h4jO6Y4a/giphy.gif",
  "https://media.giphy.com/media/l5HzZOq6kG4tDixfxT/giphy.gif",
  "https://media.giphy.com/media/rOmDeX7XXFbXsfFJb3/giphy.gif",
  "https://media.giphy.com/media/0Gte7NV0UTHAGAIwHF/giphy.gif",
  "https://media.giphy.com/media/ymgwNKgQQDkLUKtydc/giphy.gif",
  "https://media.giphy.com/media/898JubPiS6NtfEyBij/giphy.gif",
  "https://media.giphy.com/media/HBSTVJpFDnPs20MzNY/giphy.gif"
  

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Lembre-se de mencionar um usuário válido para bater!');
}
/*
message.channel.send(`${message.author.username} **Acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#000000')
        .setDescription(`${message.author} Acaba de bater em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Toma Miserável')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}