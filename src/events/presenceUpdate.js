const { status, role_id } = require('../../config.json');

module.exports = (client, oldPresence, newPresence) => {

  if(!newPresence?.activities[0]?.state) return;
  if(oldPresence === newPresence) return;

  const role = newPresence.guild.roles.cache.find(role => role.id === role_id);

  if(status.includes(newPresence.activities[0]?.state)) {
    // function to be run when user includes keywords

    if(newPresence.member.roles.cache.has(role_id)) return;

    newPresence.member.roles.add(role).catch( err => { return; });
  } 

  if(!status.includes(newPresence.activities[0]?.state)) {
    // function to be run when user does not include keywords

    if(!newPresence.member.roles.cache.has(role_id)) return;

    newPresence.member.roles.remove(role).catch( err => { return; });
  }
  };
