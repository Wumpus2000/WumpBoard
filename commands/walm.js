const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('walm')
      .setDescription('Starts to play walm music / radio!'),
    async execute(interaction, client) {
      client.func.play(interaction, process.env.WALM, 'Walm Music / Radio', false)
    },
  };