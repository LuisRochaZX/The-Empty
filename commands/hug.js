const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  "https://media.giphy.com/media/fPnZgrekwoIYxBjAtW/giphy.gif",
  "https://media.giphy.com/media/RefE5gzKStlTgFoGS6/giphy.gif",
  "https://media.giphy.com/media/5fBsFzdHcd6pvl39QF/giphy.gif",
  "https://media.giphy.com/media/GAFqXYe7HuygSksxPV/giphy.gif",
  "https://media.giphy.com/media/kf5YZBYKn9lYZVybPh/giphy.gif",
  "https://media.giphy.com/media/Qchr4hgHppG69GjVYJ/giphy.gif",
  "https://media.giphy.com/media/HCtPRyuOn4pDEQPnwe/giphy.gif",
  "https://media.giphy.com/media/vRva33h44Q9i9MkVWP/giphy.gif",
  "https://media.giphy.com/media/APF4mgmlEIrvvu0c4D/giphy.gif",
  "https://media.giphy.com/media/lFEUqciytTVsWZuau5/giphy.gif",
  "https://media.giphy.com/media/rA00xdwDGJu9hcYZIa/giphy.gif",
  "https://media.giphy.com/media/C8iGZlrvF3afG81uxa/giphy.gif",
  "https://media.giphy.com/media/zaRlNDdkaf3kqTSbD9/giphy.gif",
  "https://media.giphy.com/media/KH46UIeupHkJNQYYvM/giphy.gif",
  "https://media.giphy.com/media/TP5VgX3p5iA4AX648R/giphy.gif",
  "https://media.giphy.com/media/Uq8Byv6TgwQEBi24ls/giphy.gif",
  "https://media.giphy.com/media/uBmsYm9qxvT9RCTGJl/giphy.gif",
  "https://media.giphy.com/media/Rwi0wQJ3WeFCv96uJf/giphy.gif"
  

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Lembre-se de mencionar um usuário válido para abraçalo!');
}
/*
message.channel.send(`${message.author.username} **Acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#054F77')
        .setDescription(`${message.author} Acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Olha que coisa mais linda!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}