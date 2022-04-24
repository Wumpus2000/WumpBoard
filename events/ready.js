module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`Logged in as ${client.user.tag}!`);
    const activities = [`With Lofi Girl /`, ` music?`];
    setInterval(() => {
      let activity = activities[Math.floor(Math.random() * activities.length)];
      client.user.setActivity(activity, { type: "PLAYING" });
    }, 20000);
  },
};