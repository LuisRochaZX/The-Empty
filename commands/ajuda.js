const Discord = require('discord.js');
 
exports.run = async (client, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('#054F77')
  .setThumbnail(icon)
  .setTitle('<:sorriso:854204201895067708> - Abaixo minha lista de comandos')
  .setDescription(`Olá ${message.author}, Clique no emoji de acordo com sua necessidade. \n\n <:engrenagem:854188077958692864> <:direitaseta:854211858599903272> **Comandos Gerais.**\n\n <:ferramenta2:854199531733647360> <:direitaset:854211858599903272> **Comandos Staff.**\n\n <:oclin:854200600031789086> <:direitaset:854211858599903272> **Comandos Fun**.`)
  .setTimestamp()
  .setFooter(`Desenvolvedor do bot: LuísRochaZX#1415 (Lu) `, message.author.displayAvatarURL({Size: 32}))
 
  message.channel.send(comandos).then(msg => {
    msg.react('854188077958692864').then(r => {
      msg.react('854199531733647360').then(r => {
        msg.react('854200600031789086').then(r => {
 
        })
      })
    })
 
    const geralFilter = (reaction, user) => reaction.emoji.name === 'engrenagem' && user.id === message.author.id;
    const staffFilter = (reaction, user) => reaction.emoji.name === 'ferramentas2' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'oclin' && user.id === message.author.id;
 
    const geral = msg.createReactionCollector(geralFilter);
    const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);
 
 
    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - GERAIS')
      .setThumbnail(icon)
       .addFields(
        {
            name: '*help',
            value: `Utilize este comando para saber minha lista de comandos.`,
            inline: true
        },
        {
            name: '*ajuda',
            value: `Utilize este comando para saber minha lista de comandos.(Sinônimo do *help)`,
            inline: true
        },
        {
            name: '*ping',
            value: `Utilize este comando para saber o ping atual do servidor`,
            inline: true
        },
        {
            name: '*uptime',
            value: `Utilize este comando para saber quanto tempo estou online no servidor.`,
            inline: true
        },
        {
            name: '*tempoon',
            value: `Utilize este comando para saber quanto tempo estou online no servidor. (Sinônimo do *uptime)`,
            inline: true
        },      
        {
            name: '*ideia',
            value: `Utilize este comando para sugerir uma ideia para o servidor no canal sugira, localizado na categoria suporte.`,
            inline: true
        },
        {
            name: '*sugerir',
            value: `Utilize este comando para sugerir uma ideia para o servidor no canal sugira, localizado na categoria suporte. (Sinônimo do kideia).`,
            inline: true
        },
        {
            name: '*userinfo',
            value: `Utilize este comando para saber mais sobre o usuário mencionado após o comando.`,
            inline: true
        },
        {
            name: '*serverinfo',
            value: `Utilize este comando para saber mais sobre o servidor atual.`,
            inline: true
        },
        {
            name: '*botinfo',
            value: `Utilize este comando para saber mais sobre o bot oficial da KoP.`,
            inline: true
        }
      )
      .setColor('#054F77')
      msg.edit(embed);
      })
 
    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - STAFF')
      .setThumbnail(icon)
      .addFields(
        {
          name: '*say',
          value: 'Utilize este comando para falar com o perfil do bot.'
        },
        {
         name: '*falar',
         value: 'Utilize este comando para falar com o perfil do bot. (Sinônimo do *say)'
        },
        {
         name: '*emoji',
         value: 'Utilize este comando para mandar um emoji com o perfil do bot. Exemplo:'
        },
        {
         name: '*clear',
         value: 'Utilize este comando para limpar até 100 mensagens no chat atual.'
        },
        {
         name: '*ban',
         value: 'Utilize este comando para banir um usuário, utilize a seguinte forma kban (marcar usuário) (motivo).'       
        },
        {
         name: '*anunciar',
         value: 'Utilize este comando para anunciar com o perfil do bot.'       
        },
        {
         name: '*sorteio',
         value: 'Utilize este comando para criar um sorteio de algo, seguindo o seguinte template (ksorteio (tempo) (#canal) (PREMIO).'       
        },
        {
         name: '*votação',
         value: 'Utilize este comando para gerar uma enquete de votação.'       
        },
        {
         name: '*lock',
         value: 'Utilize este comando para trancar o chat atual'       
        },
        {
         name: '*unlock',
         value: 'Utilize este comando para trancar o chat atual'       
        }
      )
      .setColor('#054F77')
      msg.edit(embed);
    })
 
    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - FUN')
      .setThumbnail(icon)
      .addFields(
        {
            name: '*avatar',
            value: `Utilize este comando para mostrar o seu avatar, ou o avatar do usuário mencionado após o comando.`,
            inline: true
        },
        {
            name: '*abraçar',
            value: `Utilize este comando para abraçar o usuário mencionado ou marcado.`,
            inline: true
        },
        {
            name: '*hug',
            value: `Utilize este comando para abraçar o usuário mencionado ou marcado.`,
            inline: true
        },
        {
            name: '*bater',
            value: `Utilize este comando para meter a porrada no usuário marcado/mencionado.`,
            inline: true
        },
        {
            name: '*slap',
            value: `Utilize este comando para meter a porrada no usuário marcado/mencionado.`,
            inline: true
        },
        {
            name: '*cafune',
            value: `Utilize este comando para fazer seu cafuné/carinho no usuário marcado/mencionado.`,
            inline: true
        },
        {
            name: '*pat',
            value: `Utilize este comando para fazer seu cafuné/carinho no usuário marcado/mencionado.`,
            inline: true
        },
        {
            name: '*coinflip',
            value: `Utilize este comando para brincar de cara ou coroa. Exemplo: *coinflip cara. Ou *coinflip coroa.`,
            inline: true
        },
        {
            name: '*cor?',
            value: `Utilize este comando para ver as cores disponíveis para por no seu nome/nick.`,
            inline: true
        },
        {
            name: '*cor',
            value: `Utilize este comando para colocar a cor desejada no seu nome/nick. Exemplo: *cor azul. Ou para remover ultilize *cor revome (lembre de sempre tirar uma cor antes de colocar outra.)`,
            inline: true
        },
        {
            name: '*kiss',
            value: `Utilize este comando para mostrar o seu potência do beijo marcando o usuário desejado que queira beijar, óbvio que com consenso`,
            inline: true
        },
        {
            name: '*beijar',
            value: `Utilize este comando para mostrar o seu potência do beijo marcando o usuário desejado que queira beijar, óbvio que com consenso`,
            inline: true
        } 
      )
      .setColor('#054F77')
      msg.edit(embed);
    })
 
 
 
 
  })
 
 
 
 
 
 
 
 
}