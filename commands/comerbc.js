const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://thumb-p5.xhcdn.com/a/7ZfYDS7dJ64j431scGNuLQ/000/090/239/325_450.gif',
  'https://hentaigifz.com/content/2021/04/sex_001.gif',
  'http://2.bp.blogspot.com/-2mKNhnGVIxs/VOy2OZvGVPI/AAAAAAAAABg/STHaslRm-80/s1600/TSUMA%2BTO%2BMAMA%2BTO%2BBOIN%2Bbunnysuit%2Briding%2Bcowgirl%2Bhentai%2Bsex%2Bgif.gif',
  'https://i0.wp.com/hentaiporns.net/wp-content/uploads/2018/02/6039585-018.gif',
  'http://i.redd.it/4l2lsrz6j6e41.gif'
  

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Lembre-se de mencionar um usuário válido para come-lo!');
}
/*
message.channel.send(`${message.author.username} **Acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#054F77')
        .setDescription(`${message.author} Acaba de comer ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Olha que coisa mais gostosa!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "Você é fraco, lhe falta permissão de `ADMIN` para usar esse comando"
    );
}