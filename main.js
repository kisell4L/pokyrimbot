const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const token = '5014074830:AAEkMoE_WUR0wIB4XwjOFH8-NLpmQX7YP1Y';
const bot = new TelegramBot(token, {polling: true});

let timer = null;

bot.onText(/\/start/, (msg) => {
    timer = setInterval(() => {
        if (new Date().getSeconds() === 1) {
            const chatId = msg.chat.id;

            let counter = Math.floor(Math.random() * 3);

            switch (counter) {
                case 0:
                    bot.setChatPhoto(chatId, fs.createReadStream('./123.jpg'));
                    break;
                case 1:
                    bot.setChatPhoto(chatId, fs.createReadStream('./456.jpg'));
                    break;
                case 2:
                    bot.setChatPhoto(chatId, fs.createReadStream('./789.jpg'));
                    break;
            }
        }
    }, 1000)
});

bot.onText(/\/stop/, message => {
    clearInterval(timer);
})

bot.on("polling_error", console.log);
