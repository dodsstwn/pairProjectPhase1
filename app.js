const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/index');
const routerAdmin = require('./routes/indexAdmin');

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(router)
app.use(routerAdmin)

app.listen(PORT, () => {
  console.log('This app is running on PORT:', PORT)
})
