const express = require('express')
const router = express.Router()

var JSZip = require('jszip')
var Docxtemplater = require('docxtemplater')

var fs = require('fs')
var path = require('path')

//生成word
router.post('/produceword', function (req, res) {
	const { docxName, docxParams } = req.body
	const docPath = '../temp/' + docxName + '.docx'
	const docOutPath = '../output/' + docxName + '.docx'
	console.log(docPath, docOutPath)
	//Load the docx file as a binary
	try {

		var content = fs
    	.readFileSync(path.resolve(__dirname, docPath), 'binary')

    var zip = new JSZip(content)

    var doc = new Docxtemplater()
		doc.loadZip(zip)

		doc.setData(docxParams)

		try {
			// render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
			doc.render()
		} catch (err) {
			var e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
    	}
    	console.log(JSON.stringify({error: e}))
    	// The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
    	throw error
		}

		var buf = doc.getZip()
             .generate({type: 'nodebuffer'})

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





