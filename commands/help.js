const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows you a help menu!'),
  async execute(interaction, client) {

    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
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
    const embed = new MessageEmbed()
      .setColor('BLURPLE')
      .setAuthor({
        name: "Wampas's Help",
        iconURL: client.user.displayAvatarURL()
      })
      .setDescription("\n\n**quick, Join Voice Channel and click <:CirclePlay:956032213009457202> button to play Lo-Fi Hip Hop**\n\n**Need help?:**\n`ask people in the server that your in right now`\n\n*Note: you can join our server for more help or join the community*")

      .setTimestamp()
    interaction.reply({
      embeds: [embed],
      components: [row2]
    });

  }

}