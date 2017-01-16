var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.sendfile('index.html')
})

app.listen(3000, function () {
    console.log('I have opened an express server and opening index html')
    
 
})

