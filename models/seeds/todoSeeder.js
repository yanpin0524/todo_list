const Todo = require('../todo')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 1; i <= 10; i++) {
    Todo.create({ name: `item_${i}` })
  }
  console.log('種子資料載入完畢')
})
