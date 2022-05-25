const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('shows the bot Invite link, to Invite to your server.'),
  async execute(interaction, client) {

    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setStyle('LINK')
        .setLabel('Bot Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=970081902658744361&permissions=8&scope=bot%20applications.commands')
        .setEmoji('956378103603658802')

      )
    const embed = new MessageEmbed()
      .setColor('BLURPLE')
      .setAuthor({
        name: "Wampas's Invite",
        iconURL: client.user.displayAvatarURL()
      })
      .setDescription("<:CircleBot:956378103603658802> **Here is invite and support server link**")

      .setTimestamp()
    interaction.reply({
      embeds: [embed],
      components: [row2]
    });

  }

}