const express = require('express');
const app = express()
const PORT = 8005
const router = require('./routes/index');

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(router)

app.listen(PORT, () => {
  console.log('This app is running on PORT:', PORT)
})
