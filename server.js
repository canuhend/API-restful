const express = require('express')
const app = express()

const productRouter = require('./routes/product-router.js');

const server = app.listen(8080, () => {
    console.log(`Server is up and listening on port ${server.address().port}`)
})
server.on('error', error => console.log(error))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + 'public'))

app.use('/', productRouter)

app.use( (req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})



