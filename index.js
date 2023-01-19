const mongoose = require("mongoose");
const express = require('express')

const app = express()
const port = 4000

app.use(express.json());
app.use(require("./routes/students.route"));

mongoose.connect("mongodb+srv://Intucod:Musaev10@cluster1.yro8beq.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


  app.listen(port, () => {
    console.log('Сервер запущен успешно')
  })




