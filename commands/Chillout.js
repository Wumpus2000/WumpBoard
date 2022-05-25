const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('chill')
      .setDescription('Starts to play chill music / radio!'),
    async execute(interaction, client) {
      client.func.play(interaction, process.env.CHILL, 'Chilling Music / Radio', false)
    },
  };