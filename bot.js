const Discord = require("discord.js");
const client = new Discord.Client();





client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🙌『الـترحيب』-•');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | اطلق من دخل شخص جديد' , `اهلاً بك في السيرفر, ${member}`)
        .addField(':id | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`لقد خرج صديق :( :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامة يحبي :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====شكرا للاستمتاع====`, ' https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '🙌『الـترحيب』-•')
    if (!channel) return;
    channel.send({embed : embed});
    })
	
	
	
	

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const xkiller = member.guild.channels.find("name", "🙌『الـترحيب』-•");
     xkiller.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
  });
});



client.login(process.env.BOT_TOKEN);
