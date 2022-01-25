const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#054F77')
    .setDescription(` Minha lista de cores disponíveis para o saeu nome/nick! ${message.author}`)
    .setTimestamp()
    .setFooter(` Lista de cores do bot desenvolvido por LuísRochaZX#1415 `)
    .addFields(
        {
            name: 'Azul Claro',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Vermelho',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Amarelo',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Roxo',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Cinza',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Preto',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Branco',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Laranja',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Ciano',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Amarelo',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Azul Escuro',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Verde Claro',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Verde Escuro',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Rosa',
            value: `:white_check_mark:`,
            inline: true
        },
        {
            name: 'Azul Bebê Jujuba de Maçã Verde',
            value: `:x:`,
            inline: true
        },
      )
    message.channel.send(embed);
}