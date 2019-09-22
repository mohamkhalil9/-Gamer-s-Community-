const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 100000 ;
    var setGame = [`Arab Force For RP | قوات العرب للحياة الواقعية`,`$invite Users ${client.users.size}`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);100000

});




client.login(process.env.BOT_TOKEN);
