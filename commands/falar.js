const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sender = message.author;

  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "Você é fraco, lhe falta permissão de `ADMIN` para usar esse comando"
    );

  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};