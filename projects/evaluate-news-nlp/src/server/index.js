var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var textapi = new meaningCloud({
    application_key: "ba28d61581226cb358f61b5b663ab0bb"
  });

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
