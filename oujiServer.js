const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const session = require('express-session')

const app = express()

// 设置服务器端口
app.set('port', process.env.port || 6633)

//for parsing application/json
app.use(bodyParser.json())

//for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'www')))

//加载 word静态资源
app.use(express.static(path.resolve(__dirname, 'output')))

routes(app)

// 下载
app.get('/output/:docxname', function(req, res) {
  // console.log(req.params, 11212)
  const { docxname } = req.params
  const downloadName = docxname + '.docx'
  const docOutPath = './output/' + docxname + '.docx'
  const file = path.resolve(__dirname, docOutPath)
  res.download(file, downloadName)
})

// app.get('/', function(req, res) {
//     const html = fs.readFileSync(path.resolve(__dirname, './www/index.html'), 'utf-8')
//     res.send(html)
// })

app.use(function(req, res) {
  res.status(404).end()
})

app.listen(app.get('port'), function() {
  console.log('Visit http://localhost:' + app.get('port'))
})
