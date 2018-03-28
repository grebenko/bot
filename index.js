const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
let price = 0.0008;
require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

bot.on("message", msg => {
  const txt = msg.text;
  const chatId = msg.chat.id;
  console.log(txt);
  if (/\/setprice [0-1+]/.test(txt)) {
    console.log(msg.text.split(" ")[1]);
    price = parseFloat(msg.text.split(" ")[1]);
  }
  else if (/\/CPP/.test(txt)) {
    bot.sendMessage(chatId, "Price for 1 CPP right now is " + price + " ETH");
  }
  else if (/\/BuyCPP/.test(txt)) {
    bot.sendMessage(chatId, "[Buy Tokens](www.cryptopus.co/participate)", {parse_mode: 'markdown'});
  }
  const member = msg.new_chat_member.id;
  if (member != "0") {

  }
});
