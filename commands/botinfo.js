const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#054F7')
    .setDescription(`Olá ${message.author}, abaixo tem umas curiosidades sobre mim.`)
    .setTimestamp()
    .setFooter(`Comando executado por: ${message.author.username}`)
    .addFields(
        {
            name: 'Prazer sou o:',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: '<:fun:854211934131454022> Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores atualmente.`,
            inline: true
        },
        {
            name: '<:verdin:854831306373332993> Canais:',
            value: `Tenho **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: '<:fun:854211934131454022> Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: '<:pong:854830039892099102> Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: '<:oclin:854200600031789086> Meus criadores:',
            value: 'LuísRochaZX#0622',
            inline: true
        },
        {
            name: '<:verdin:854831306373332993> Meu servidor oficial:',
            value: 'https://discord.gg/BW9P8hSpDb',
            inline: true
        },
    )
    message.channel.send(embed);
}