const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/sDpHmngLxVnDvQuj0Y/giphy.gif',
  "https://media.giphy.com/media/7RbuZUMZI6WZtBKvM2/giphy.gif",
  "https://media.giphy.com/media/aOk7WRXJ7jW2T9TrvZ/giphy.gif",
  "https://media.giphy.com/media/z2VbYjcdgptxLXSenb/giphy.gif",
  "https://media.giphy.com/media/3DKJILtagM7bhEuXbH/giphy.gif",
  "https://media.giphy.com/media/Wor1GelqHnNb9m9wmr/giphy.gif",
  "https://media.giphy.com/media/DVvdGcnaDCozU0VyHd/giphy.gif",
  "https://media.giphy.com/media/oeQpmk375awqQdmxpo/giphy.gif",
  "https://media.giphy.com/media/a9ZDkWquDjU7Azo7eB/giphy.gif",
  "https://media.giphy.com/media/lY5EFYEYH1CDyitBnF/giphy.gif",
  "https://media.giphy.com/media/rb6xzCW1Qz4NB8L0n6/giphy.gif",
  "https://media.giphy.com/media/BDoJFK0DUKcpAVVlBV/giphy.gif",
  "https://media.giphy.com/media/ZFEDBKSYmjaWnwDulE/giphy.gif",
  "https://media.giphy.com/media/rBunqV790hWj8RDMCC/giphy.gif",
  "https://media.giphy.com/media/COPjxPggTK42IJ9lS1/giphy.gif",
  "https://media.giphy.com/media/JQqVMrZoxJrUopuvme/giphy.gif",
  "https://media.giphy.com/media/yCdBGEnOhJ8F4pqWD0/giphy.gif",
  "https://media.giphy.com/media/q12D54pGHPIqkZJRBn/giphy.gif"
  

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