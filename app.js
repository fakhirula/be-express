const express = require('express')
const router = require("./routes/api.js");

const app = express()
const port = 3000

// Menggunakan routing (router)
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})