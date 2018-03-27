const SlackBot = require('slackbots')
const CronJob = require('cron').CronJob

const TOKEN = process.env.BOT_API_TOKEN
const BOT_NAME = 'pepe'
const CHANNEL = 'general'
const PARAMS = {
    icon_emoji: ':heart:'
}


const CRON_PATTERN = '*/5 * * * * *'
const TIME_ZONE = 'Europe/Berlin'


if (!TOKEN) {
    throw new Error('BOT_API_TOKEN not specified')
}

const bot = new SlackBot({
    token: TOKEN,
    name: BOT_NAME
})

const task = () => {
     bot.postMessageToChannel(CHANNEL, 'Hola Arian!!!', PARAMS);
}

const onCronError = error => {
    console.error('Cron job stopped', error);
}

bot.on('start', () => {
	new CronJob(CRON_PATTERN, task, onCronError, true, TIME_ZONE);
})