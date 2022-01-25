const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
 
  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (message.member.roles.cache.some(r => [
              "755810136983077115",
              "",
              "",
            ].includes(r.id))) {
              return message.channel.send(`${sender} Este comando é restrito`)
            }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('CHAT TRANCADO!')
    .setDescription(`Este chat foi mutado.`)
    .addField('Destrancar:', '(coloque seu comando aqui)', true)
    .addField('Trancado Por:', `${message.author}`, true)
    .addField('Motivo:', motivo)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('#054F77')
    message.channel.send(embed);
          
}