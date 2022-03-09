const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('【 資料庫發生錯誤!! 】')
})

db.once('open', () => {
  console.log('【 資料庫已連接 】')
})

module.exports = db