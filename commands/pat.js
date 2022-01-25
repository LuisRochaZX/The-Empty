const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/TLIsUhR2QeqzjV7apM/giphy.gif',
  "https://media.giphy.com/media/c4NPNKPaVHjFNJr0aI/giphy.gif",
  "https://media.giphy.com/media/KTVzOqTS2PZEX5qFeo/giphy.gif",
  "https://media.giphy.com/media/GdOx2j0nD5ihqa1oWw/giphy.gif",
  "https://media.giphy.com/media/MoC8KINbSU0RUwp3M8/giphy.gif",
  "https://media.giphy.com/media/76zepWJOK6DZMPvTsp/giphy.gif",
  "https://media.giphy.com/media/gNyOwJoXqFmKg9KVy6/giphy.gif",
  "https://media.giphy.com/media/nnthCUMiZL1IycncDW/giphy.gif",
  "https://media.giphy.com/media/FaOIzIwGyxFoG0aQ8O/giphy.gif",
  "https://media.giphy.com/media/kDld6hM0DKHF9fpaDS/giphy.gif",
  "https://media.giphy.com/media/ob2hqscI9le2sw3A7r/giphy.gif",
  "https://media.giphy.com/media/brSRU3To9JRaSd6FKs/giphy.gif",
  "https://media.giphy.com/media/XIMTjVwvSQhnAudf3F/giphy.gif",
  "https://media.giphy.com/media/lrm0RO4t2rK0j1ieXe/giphy.gif",
  "https://media.giphy.com/media/vleGCF6FwZyqeMOPK8/giphy.gif",
  "https://media.giphy.com/media/2WCucmTDURXDNPX3NA/giphy.gif",
  "https://media.giphy.com/media/zzDBPAp2mg9H3r3291/giphy.gif",
  "https://media.giphy.com/media/xIrU7PxTFJZ4q0xcNx/giphy.gif",
  "https://media.giphy.com/media/ZV1wUhGWQosS5lqBZA/giphy.gif"
  
  

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Lembre-se de mencionar um usuário válido para dar um cafuné');
}
/*
message.channel.send(`${message.author.username} **Acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#054F77')
        .setDescription(`${message.author} Acaba de acariciar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('UwU')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}