require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
let price = 0.0008;
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});

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
    bot.sendMessage(
      chatId,
      msg.new_chat_member.first_name +
        ", welcome to the chat! Nice to have you in our community! Feel free to ask any questions related to the project."
    );
  }
});
