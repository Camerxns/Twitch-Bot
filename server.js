require('dotenv').config();

let tmi = require('tmi.js');

let eval = Math.random(100);

let client = new tmi.Client({
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN,
    },
    channels: [ 'Katly707' ],
});



client.connect();

client.on('connected', (address, port) => {
    client.action('Katly707', 'Hello! KatlyBot is now connected!');
    let lastMessageSent = 0;

setInterval(() => {
  const currentTime = Date.now();
  if (currentTime - lastMessageSent >= 60 * 60 * 1000) {
    client.say("Katly707", "Join The Discord Today! https://discord.gg/VVdhMD3VQR");
    lastMessageSent = currentTime;
  }
}, 1000);
})

client.on('chat', async (channel, user, chat) => {
    let isNotBot = user.username.toLowerCase() !== process.env.TWITCH_BOT_USERNAME.toLowerCase();
    if ( !isNotBot ) return;

    function commands(){
        if(chat.toLowerCase() === '!hello') {
            client.say(channel, `@${user.username}, heya!`);
        }
        if(chat.toLowerCase() === '!kiss') {
            client.say(channel, `@${user.username}, has kissed the chat!`);
        }
        if(chat.toLowerCase() === '!commands') {
            client.say(channel, `You can find my list of commands here: http://katlybotcommands.ga`);
        }
        if(chat.toLowerCase() === '!hm') {
            client.say(channel, `hmmm?`);
        }
        if(chat.toLowerCase() === '!discord') {
            client.say(channel, `Join The Discord Today! https://discord.gg/VVdhMD3VQR`);
        }
        if(chat.toLowerCase() === '!hype') {
            client.say(channel, `WOOOOOOOOOOOOOOOO HYPE HYPE HYPE WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);
        }
        if(chat.toLowerCase() === '!dixper') {
            client.say(channel, `Come scare me! https://dixper.gg/katly707`);
        }
        if(chat.toLowerCase() === '!hug') {
            client.say(channel, `${user.username} hugged ${user.touser}`);
        }
    }
    commands();
});
