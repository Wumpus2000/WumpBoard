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
    .setName('vote')
    .setDescription('shows wampas votes links.'),
  async execute(interaction, client) {

    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setStyle('LINK')
        .setLabel('Bot Vote')
        .setURL('https://top.gg/bot/970081902658744361')
        .setEmoji('949765559703203841'),
        new MessageButton()
        .setStyle('LINK')
        .setLabel('Server Vote')
        .setURL('https://top.gg/servers/939720556700368907')
        .setEmoji('949765559703203841')
      )
    const embed = new MessageEmbed()
      .setColor('BLURPLE')
      .setAuthor({
        name: "Wampas's votes",
        iconURL: client.user.displayAvatarURL()
      })
      .setDescription("**<:CircleThumbsUp:949765559703203841> here are my votes links, everybody vote lmao.**")

      .setTimestamp()
    interaction.reply({
      embeds: [embed],
      components: [row2]
    });

  }

}