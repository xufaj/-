const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "d";
var adminprefix = "²"
const developers = ["446999223183998987"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`tm   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`tm   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`tm   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(`tm`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === adminprefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
 message.author.sendMessage(`
²sets ستريمينق
²setw واتشينق 
²setl ليسينيق 
²setavatar تغيير الافاتار
²setname تغيير الاسم
    
});
 
 
 
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
