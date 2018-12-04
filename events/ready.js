const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

    var Games = [

        "-yardım | -yenilikler yazarak yenilikleri öğrenin!",

        "-yardım | -davet ile botumuzu davet edin!",

        "-yardım | 4.1.7 sürümü ile ",

		"-yardımcı | -öneri ile önerilerinizi gönderin!",

		"-çeviri | -kelimeleri istediğiniz dile çevirin",

      "-avatar | -avatarınızı gösteriir",

      "-yapımcım | -yapımcım hakkında bilgi alırsınız",
      "Yakında -MÜZİK KOMUTU- gelicek",

    ];


module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);

      setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setActivity(Games[random]);
        client.user.setStatus("dnd")
        }, 2 * 2500);
};
