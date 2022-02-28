const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000


mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb is error!!')
  console.log('【 資料庫發生錯誤!! 】')
})

db.once('open', () => {
  console.log('mongodb is connected.')
  console.log('【 資料庫已連接 】')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine','hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Your URL is : localhost:${port}`)
})
