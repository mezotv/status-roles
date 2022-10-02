const { Client, GatewayIntentBits } = require('discord.js');

/* Initialize client */
const client = new Client({
    intents: [
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildPresences
    ],
});

const statusComponents = async () => {
  await require('./util/statusClient')(client);
}

statusComponents();