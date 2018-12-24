const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
//Cors allows server use from anywhere need to have good security
app.use(cors())

// used to test the backend
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.listen(process.env.Port || 8081)
