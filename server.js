var express = require('express')
var http = require('http')
var Primus = require('primus.io')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var port = process.env.PORT || 8080

var app = express()
var server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// var primus = new Primus(server, { 
//   port: '8080',
//   origins: '*',
//   transformer: 'websockets',
//   parser: 'JSON'
// })

// var messages = [
//   { message: 'hello from server' }
// ]

// var sparks = []


// primus.on('connection', spark => {
  
//   sparks.push(spark)
  
//   console.log('connection established')

//   spark.on('message', msg => {
//     messages.push(msg)

//     // cycle through each connected client
//     sparks.forEach(sp => {
//       sp.send('refresh', messages)
//         console.log('msg', msg)
//       })
//     })


// })

if (require.main === module) {
  server.listen(port, function () {
    console.log('http server listening on port: ', port)
  })
}