const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`port:${port}`)
})

app.listen(port, () => {
  console.log(`Your URL is : localhost:${port}`)
})
