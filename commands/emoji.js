const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
 
 if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "Você é fraco, lhe falta permissão de `ADMIN` para usar esse comando"
    );
 
  if (!args[0])
    return message.channel.send(
      `**${message.author.username}, a sintaxe correta é:** ` +
        "`" +
        "themoji nomedoemoji`"
    ); //Troque a exclamação ! da mensagem acima pelo seu prefixo
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.channel.send(
      "`" + args[0] + "` **não é um emoji deste servidor.**"
    );
  } else if (emoji.animated === true) {
    message.channel.send(`<a:${args[0]}:${emoji.id}>`);
  } else {
    message.channel.send(`<:${args[0]}:${emoji.id}>`);
  }
};