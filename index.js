const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require('discord.js'); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("755808525292142642");
  let channel = await client.channels.cache.get("755811939971498065");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "weewoo");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${weewoo} Boas-vindas ${weewoo}`)
      .setImage("https://media.giphy.com/media/pygoDlWnRNpkuKXXJd/giphy.gif")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Espero que se divirta em nosso servidor")
      .setTimestamp();

    channel.send(embed);
  }
});

client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("755808525292142642");
  let channel = await client.channels.cache.get("755814300211216607");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "veryangry");
  if (guild != member.guild) {
    return console.log("Algum saco pela saiu do servidor. Mas não é nesse, então tá tudo bem :)");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Adeus! ${emoji}`)
      .setImage("https://imgur.com/3vYVlHb.gif")
      .setDescription(`**${member.user.username}**, saiu do servidor! Que vacilão :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Sinto pena dele")
      .setTimestamp();

    channel.send(embed);
  }
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
		return;
	if (
		message.content.startsWith(`<@!${client.user.id}>`) ||
		message.content.startsWith(`<@${client.user.id}>`)
	)
		return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});

client.on('ready', () => {
	let activities = [
			`Utilize ${config.prefix}help para obter ajuda`,
			`Estou em ${client.guilds.cache.size} servidores!`,
			`Este serve tem ${client.channels.cache.size} canais!`,
			`Gosta desse server? Divulge para nós!`
		],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'WATCHING'
			}),
		70000
	);
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'PLAYING'
			}),
		200000
	);
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'LISTENING'
			}),
		20000
	);
	client.user.setStatus('online').catch(console.error);
	console.log('Estou Online!');
});

client.on("message", msg => {
  if(msg.content === `<@${client.user.id}>`)
  msg.channel.send("**Opa tudo bom? Precisa de ajuda? use *help, meu prefixo é **`*`") 
})

client.on("message", msg => {
  if(msg.content === `<@!${client.user.id}>`)
  msg.channel.send("**Oi tudo bom? Você precisa de ajuda? use *help, meu prefixo é **`*`") 
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
