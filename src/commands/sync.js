const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sync")
    .setDescription("Sync your roles with your Discord status"),

  async execute(interaction, client) {


    await interaction.reply({
      content: "Syncing roles...",
      });
  },
};
