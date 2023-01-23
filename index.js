const express = require('express')
const mongoose = require('mongoose')

const app = express();
port = 3036;
app.use(express.json());

app.use(require('./routes/user.route'))
app.use(require('./routes/twitt.route'))
app.use(require('./routes/comments.route'))

mongoose
  .connect("mongodb+srv://khasiev:malsy1999@cluster0.yzc6knt.mongodb.net/twitter")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("conected");
});