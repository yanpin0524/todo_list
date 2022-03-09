const mongoose = require('mongoose')
const Todo = require('../todo')

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb is error!!')
  console.log('【 資料庫發生錯誤!! 】')
})

db.once('open', () => {
  console.log('mongodb is connected.')
  console.log('【 資料庫已連接 】')

  for (let i = 1; i <= 10; i++) {
    Todo.create({ name: `item_${i}` })
  }

  console.log('種子資料載入完畢')
})
