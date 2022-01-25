const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var string = args.join(" ");
  var colors = [
    {name:"vermelho", id:"837060106876092456"},
    {name:"azul claro", id:"837060519407386635"},
    {name:"verde claro", id:"837060241639079937"},
    {name:"azul escuro", id:"837060619961499688"},
    {name:"verde escuro", id:"837060408132894750"},
    {name:"roxo", id:"837074993686249512"},
    {name:"ciano", id:"837075137652064318"},
    {name:"amarelo", id:"837074984844787753"},
    {name:"laranja", id:"837076586851074078"},
    {name:"rosa", id:"837076336812097546"},
    {name:"cinza", id:"837077103861170197"},
    {name:"preto", id:"837077386524622889"},
    {name:"branco", id:"837077569839824958"}
  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.channel.send(`${message.author}, Escreva o nome da cor após o comando. Se quiser ver as cores que tem use o comando *cor?`);
  } else if (args[0].toLowerCase()  === "remove") {
      await message.member.roles.remove(ids);
      return await message.channel.send(`${message.author}, Suas cores foram resetadas ao padrão.`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.channel.send(
      `${message.author}, não existe cores com o nome ${string} neste servidor. Se quiser ver as cores que tem use o comando *cor?`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.channel.send(`${message.author}, Agora você ganhou a cor ${string}`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};