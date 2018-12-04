const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**KANDİLLER**")
        .addField("Mevlid Kandili","19 Kasım Pazartesi günü idrak edilecektir")
        .addField("Regaip Kandili"," 7 Mart Perşembe günü idrak edilecektir")
        .addField("Miraç Kandili"," 2 Nisan Salı günü idrak edilecektir")
        .addField("Berat Kandili"," 19 Nisan perşembe günü idrak edilecektir")

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kandilgeceleri',
  description: 'kandilgecelerni Gösterir',
  usage: 'kandilgeceleri'
};
