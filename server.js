let express = require('express')
let path = require('path')

let api = require('./api.js')

let app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.use('/planetary/apod', api)

app.use(function(res, res, next) {
    res.status(404)
})

let server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port', server.address().port)
})