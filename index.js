require('dotenv').config();
const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN);
 
bot.on('message', (ctx) => ctx.reply(`Hello, ${ctx.message.from.first_name}`));

bot.launch()