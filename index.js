const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

// 设置服务器端口
app.set('port', (process.env.port || 6633))

//for parsing application/json
app.use(bodyParser.json())

//for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

app.use(function(req, res) {
  res.status(404).end()
})

app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})