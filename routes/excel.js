const express = require('express')
const path = require('path')
const fs = require('fs')
const xlsx = require('node-xlsx')
const dayjs = require('dayjs')
const JSZip = require('jszip')
const PizZip = require('pizzip')
const Docxtemplater = require('docxtemplater')

const router = express.Router()

// 上传excel
router.post("/upload_excel", async (req, res) => {
  if (!req.files || req.files.length === 0) {
    res.send({ 
      code: 400,
      message: '请选择文件上传' 
    })
  }
  // 限制上传文件的大小
  const maxFileSize = 1024 * 1024 * 5
  if (req.files.size > maxFileSize) {
    res.send({ 
      code: 400,
      message: '上传文件过大' 
    })
  }
  const { originalname, buffer } = req.files[0]
  // 获取文件后缀
  const fileExtension = originalname.substring(originalname.lastIndexOf('.') + 1)
  if (!['xlsx', 'xls'].includes(fileExtension)) {
    res.send({ 
      code: 400,
      message: '请上传xls或xlsx格式的文件'
    })
  }
  const uploadExcelPath = `../template/uploadTemp.${fileExtension}`
  // 写入 excel
  await fs.writeFileSync(uploadExcelPath, buffer, 'binary')
  // 解析excel文件
  // const workbook = xlsx.read(buffer, { type: "buffer" })
  // const sheet = workbook.Sheets[workbook.SheetNames[0]] // 选择第一个工作簿
  // const result = xlsx.utils.sheet_to_json(sheet)
  const workbook = xlsx.parse(uploadExcelPath)
  // 读取第一个工作簿内容
  const sheet1 = workbook[0].data
  if (Array.isArray(sheet1)) {
    // sheet1.forEach((sheetItem, index) => {
    //   // 去掉表头
    //   if (index !== 0 && sheetItem.length > 0) {
    //     console.log(sheetItem, '=== excel 中的数据 ===')
    //   }
    // })
    res.send({
      code: 200,
      message: 'Excel 上传成功'
    })
  } else {
    res.send({
      code: 400,
      message: 'Excel 数据错误'
    })
  }
})

// 获取上传 excel 中的数据
router.get("/excel", async (req, res) => {
  let excelPath = `../template/uploadTemp.xlsx`
  excelPath = path.resolve(__dirname, excelPath)
  try {
    const workbook = xlsx.parse(excelPath)
    // 读取第一个工作簿内容
    const sheet1 = workbook[0].data
    if (Array.isArray(sheet1)) {
      const list = []
      sheet1.forEach((sheetItem, index) => {
        // 去掉表头
        if (index !== 0 && sheetItem.length > 0) {
          // console.log(sheetItem, '=== excel 中的数据 ===')
          let _resignDate = ''
          if (sheetItem[5]) {
            _resignDate = new Date(1900, 0, sheetItem[5] - 1)
          }
          let _date = ''
          if (sheetItem[9]) {
            _date = new Date(1900, 0, sheetItem[9] - 1)
          }
          list.push({
            companyCode: sheetItem[0] || '',
            companyEnName: sheetItem[1] || '',
            companyCnName: sheetItem[2] || '',
            companySecretryEn: sheetItem[3] || '',
            companySecretryCn: sheetItem[4] || '',
            resignDate: _resignDate,
            submitUser: sheetItem[6] || '',
            submitAddr: sheetItem[7] || '',
            signUser: sheetItem[8] || '',
            date: _date
          })
        }
      })
      return res.json({
        code: 200,
        body: list,
        message: '获取成功'
      })
    } else {
      return res.json({
        code: 200,
        message: '没有数据'
      })
    }
  } catch(err) {
    return res.json({
      code: 200,
      message: '读取 excel 报错～'
    })
  }
})

router.post("/download_docs", function (req, res) {
  let excelPath = `../template/uploadTemp.xlsx`
  excelPath = path.resolve(__dirname, excelPath)
  try {
    const workbook = xlsx.parse(excelPath)
    // 读取第一个工作簿内容
    const sheet1 = workbook[0].data
    if (Array.isArray(sheet1)) {
      sheet1.forEach((sheetItem, index) => {
        if (index !== 0 && sheetItem.length > 0) {
          let _resignDate = ''
          let _resignDateY = ''
          let _resignDateM = ''
          let _resignDateD = ''
          if (sheetItem[5]) {
            _resignDate = new Date(1900, 0, sheetItem[5] - 1)
            // _resignDate = dayjs(_resignDate).format('DD/MM/YYYY')
            _resignDateY = dayjs(_resignDate).format('YYYY')
            _resignDateM = dayjs(_resignDate).format('MM')
            _resignDateD = dayjs(_resignDate).format('DD')
          }
          let _date = ''
          if (sheetItem[9]) {
            _date = new Date(1900, 0, sheetItem[9] - 1)
            _date = dayjs(_date).format('DD/MM/YYYY')
          }
          const docPath =  '../template/ND4.docx'
          const docOutPath = `../downloads/ND4/ND4_${index}.docx`

          const docxParams = {
            companyCode: sheetItem[0] || '',
            companyEnName: sheetItem[1] || '',
            companyCnName: sheetItem[2] || '',
            companySecretryEn: sheetItem[3] || '',
            companySecretryCn: sheetItem[4] || '',
            submitUser: sheetItem[6] || '',
            submitAddr: sheetItem[7] || '',
            signUser: sheetItem[8] || '',
            date: _date,
            resignDateY: _resignDateY,
            resignDateM: _resignDateM,
            resignDateD: _resignDateD
          }
          const content = fs.readFileSync(path.resolve(__dirname, docPath),'binary')
          const zip = new PizZip(content)
          // const doc = new Docxtemplater()
          // doc.loadZip(zip)
          // doc.setData(docxParams)
          // doc.render()
          const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
          })
          doc.render(docxParams)
          const buf = doc.getZip().generate({ type: 'nodebuffer' })
          fs.writeFileSync(path.resolve(__dirname, docOutPath), buf)
        }
      })
      startZip(res)
    }
  } catch(err) {
    console.log('errrrr')
    res.send({
      code: 500,
      message: '下载失败～'
    })
  }
})

function startZip(res) {
  const zip = new JSZip()
  const targetDir = path.resolve(__dirname, '../downloads/ND4')

  // 读取目录中的所有文件及文件夹
  const files = fs.readdirSync(targetDir)
  // 遍历检测目录中的文件
  files.forEach(function(fileName) {
    const fillPath = targetDir + '/' + fileName
    zip.file(fileName, fs.readFileSync(fillPath)) //压缩目录添加文件
  })
  
  const nowDate = dayjs().format('YYYY/MM/DD-HH:mm:ss')
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
      fs.writeFile(path.resolve(__dirname, `../downloads/ND4.zip`), content, 'binary', function() {
        console.log(`生成ND4.zip成功，时间 ${new Date()}`)
        res.send({
          code: 200,
          message: '下载成功',
          data: ''
        })
      })
    })
}

module.exports = router