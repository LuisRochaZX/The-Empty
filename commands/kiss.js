const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  "https://media.giphy.com/media/Oj2cKkv8TDsIScpGCC/giphy.gif",
  "https://media.giphy.com/media/k7xKxHwc0ojqh7fyHn/giphy.gif",
  "https://media.giphy.com/media/IJWBfER8YB4EpD7jBP/giphy.gif",
  "https://media.giphy.com/media/I4X890WlIMk146Gfdy/giphy.gif",
  "https://media.giphy.com/media/8g0PxF51ox4OfG6XW5/giphy.gif",
  "https://media.giphy.com/media/JBDmknYsxwshXP5YBn/giphy.gif",
  "https://media.giphy.com/media/3SPfsERWgYLTSScowD/giphy.gif",
  "https://media.giphy.com/media/IBMsY915W2QoUQPFVW/giphy.gif",
  "https://media.giphy.com/media/2kiKtsMzLX7NGziCPh/giphy.gif",
  "https://media.giphy.com/media/Ow9QSUuyYDPGAk6tYq/giphy.gif",
  "https://media.giphy.com/media/38SDquu6D8H7yyNYvJ/giphy.gif",
  "https://media.giphy.com/media/0hJ7T51AtILopo4RGn/giphy.gif"

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **Acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#054F77')
        .setDescription(`${message.author} Acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}