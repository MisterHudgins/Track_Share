const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
//Cors allows server use from anywhere need to have good security
app.use(cors())

// used to test the backend
// app.get('/status', (req, res) => {
//     res.send({
//         message: 'hello world'
//     })
// })

require('./routes', app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })


