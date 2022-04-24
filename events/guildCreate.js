const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'guildCreate',
  async execute(guild, client) {
    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Play')
          .setEmoji('956032213009457202')
          .setCustomId('play'),
        new MessageButton()
        .setStyle('LINK')
        .setLabel('Website')
        .setURL('http://wampas.gg/')
        .setEmoji('957042683749208094'),
        new MessageButton()
        .setStyle('LINK')
        .setLabel('Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=940463579247829032&permissions=8&scope=bot%20applications.commands')
        .setEmoji('956378103603658802'),
        new MessageButton()
        .setLabel('Support')
        .setStyle('LINK')
        .setURL('https://discord.gg/CJ4HVZK2Za')
        .setEmoji('956378149875253290')
      )
    try {
      let defaultChannel = "";
      guild.channels.cache.forEach((channel) => {
        if(channel.type == "GUILD_TEXT" && defaultChannel == "") {
          if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
            defaultChannel = channel.id;
          }
        }
      })
      let channel = guild.channels.cache.get(guild.systemChannelID || defaultChannel);
      let embed = new MessageEmbed()
        .setColor("BLURPLE")
        .setTitle("Imagine a Bot...")
        .setImage("https://cdn.discordapp.com/attachments/939720531492605963/967725122150604800/Desktop_Wallpaper.png")
        .setDescription("Thank you for adding Wampas to your server! We have designed a friendly Bot makes it easier than ever to play music in your server 20/4. You can access our website & support server using the URL buttons below!\n\n**Join a Voice Channel then press the <:CirclePlay:956032213009457202> button to start playing**")
        .setAuthor({name: "Wampas™r", iconURL: client.user.displayAvatarURL()})
      channel.send({embeds: [embed], components: [ row2 ]})
    } catch (err) {
      return;
    }
  },
};