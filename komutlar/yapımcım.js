const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**FERDİ**")
        .setImage("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814")
        .setThumbnail("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814")
        .setColor(0x00AE86)
        .addField("Yapımcım", "Ferdi Yıldız", true)
        .addField("İletişim", `
        *Discord = Ferdi#2958
        *Steam = https://steamcommunity.com/profiles/765
   `, true)
   .addField("Öneriler için", `-öneri komutunu kullanınız`, true)
   .addField("Bot", "BU bir TÜRK botudur")


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapımcım the Lumberjack hakkında bilgi verir',
  usage: 'yapımcım'
};
