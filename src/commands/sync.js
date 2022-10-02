const { SlashCommandBuilder } = require('discord.js');
const { status, role_id } = require('../../config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sync")
    .setDescription("Sync your roles with your Discord status"),

  async execute(interaction, client) {

    const guild = client.guilds.cache.get(interaction.guildId);
    const role = guild.roles.cache.find(role => role.id === role_id);
    const member = guild.members.cache.get(interaction.user.id);

    if(status.includes(member.presence.activities[0]?.state)) {
      // function to be run when user includes keywords
  
      if(member.roles.cache.has(role_id))
  
      member.roles.add(role).catch( err => { interaction.reply({ content: "Error: " + err, ephemeral: true }); });
    } else {
      member.roles.remove(role).catch( err => { interaction.reply({ content: "Error: " + err, ephemeral: true }); });
    }
  
    await interaction.reply({
      content: "Roles have been synced!",
      ephemeral: true
      });
  },
};
