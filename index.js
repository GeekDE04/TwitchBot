const tmi = require("tmi.js");

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity: {
    username: 'botname',
    password: 'outh:password',
  },
  channels: ['channelname'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (adress, port) => {
  client.action('channelname','Hallo, Bot is now connected');
});

client.on('chat', (channel, user, message, self) => {
  if (message === '!boti') {
    client.action('channelname','Botinfo');
  }
});
