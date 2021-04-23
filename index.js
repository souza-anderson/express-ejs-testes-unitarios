const express = require('express')
const path = require('path')
const routerIndex = require('./routes/index')
const routerClients = require('./routes/clients')
const app = express()

const port = 3000

// app.use('/', (req, res, next) => {
//   console.log('não mais ninguém')
//   next()
// })
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', routerIndex)
app.use('/clients', routerClients)

app.listen(port, () => console.log('Server is running on port:' + port))