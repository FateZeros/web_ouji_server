const express = require('express')
const router = express.Router()

var JSZip = require('jszip')
var PizZip = require('pizzip')
var Docxtemplater = require('docxtemplater')

var fs = require('fs')
var path = require('path')

function startZip(pathName, tempName) {
  const zip = new JSZip()
  const targetDir = path.resolve(__dirname, pathName)

  // 读取目录中的所有文件及文件夹
  const files = fs.readdirSync(targetDir)
  //遍历检测目录中的文件
  files.forEach(function(fileName) {
    const fillPath = targetDir + '/' + fileName
    zip.file(fileName, fs.readFileSync(fillPath)) //压缩目录添加文件
  })

  zip
    .generateAsync({
      //设置压缩格式
      type: 'nodebuffer', //nodejs用
      compression: 'DEFLATE', //压缩算法
      compressionOptions: {
        //压缩级别
        level: 9
      }
    })
    .then(function(content) {
      fs.writeFile(`./output/${tempName}.zip`, content, 'binary', function() {
        console.log(`生成${tempName}.zip成功，时间 ${new Date()}`)
      })

      //将打包的内容写入 当前output的 .zip中
      // fs.writeFileSync(
      //   path.resolve(__dirname, `/output/${tempName}.zip`),
      //   content,
      //   'binary'
      // )

      // saveAs()
      // see FileSaver.js npm install file-saver
      // console.log(content, 121212)
      // FileSaver.saveAs(content, '11.zip')
    })
}

router.post('/produceword-muti', function(req, res) {
  const { docxName = [], tempName, docxParams } = req.body

  const docxSize = docxName.length
  for (let i = 0; i < docxSize; i++) {
    const name = docxName[i]
    const docPath = `../temp/${tempName}/${name}.docx`
    const docOutPath = `../output/${tempName}/${name}.docx`
    // console.log(docPath, 'for ---------')

    try {
      const content = fs.readFileSync(
        path.resolve(__dirname, docPath),
        'binary'
      )
      const zip = new PizZip(content)
      // console.log(zip, 111)

      const doc = new Docxtemplater()
      doc.loadZip(zip)
      doc.setData(docxParams)

      try {
        doc.render()
      } catch (err) {
        const e = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          properties: error.properties
        }
        console.log(JSON.stringify({ error: e }))
        throw error
      }
      const buf = doc.getZip().generate({ type: 'nodebuffer' })
      fs.writeFileSync(path.resolve(__dirname, docOutPath), buf)
    } catch (e) {
      console.log(JSON.stringify(e))
      res.send({
        code: -1,
        msg: '服务器故障'
      })
    }
  }

  // 压缩文件
  const targetDir = `../output/${tempName}`
  startZip(targetDir, tempName)

  res.send({
    code: 200,
    msg: '提交成功'
  })
})

//生成 单个 word API
router.post('/produceword', function(req, res) {
  const { docxName, docxParams } = req.body
  const docPath = '../temp/' + docxName + '.docx'
  const docOutPath = '../output/' + docxName + '.docx'

  // console.log(docPath, docOutPath)
  //Load the docx file as a binary
  try {
    const content = fs.readFileSync(path.resolve(__dirname, docPath), 'binary')

    const zip = new PizZip(content)

    const doc = new Docxtemplater()
    doc.loadZip(zip)
    doc.setData(docxParams)

    try {
      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render()
    } catch (err) {
      const e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties
      }
      console.log(JSON.stringify({ error: e }))
      // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
      throw error
    }

    const buf = doc.getZip().generate({ type: 'nodebuffer' })
    // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.resolve(__dirname, docOutPath), buf)

    res.send({
      code: 200,
      msg: '提交成功'
    })
  } catch (e) {
    console.log(JSON.stringify(e))
    res.send({
      code: -1,
      msg: '服务器故障'
    })
  }
})

module.exports = router
