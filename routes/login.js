const express = require('express')
const router = express.Router()

const config = require('../config')

//登录
router.post('/login', function (req, res) {
	console.log(req.body, 12)
	const { USER_NAME, PWD } = config
  const { username, password } = req.body
  if (username !== USER_NAME) {
  	res.send({
  		code: 40001,
  		msg: '用户名错误'
  	})
  	return
  }

  if (password !== PWD) {
  	res.send({
  		code: 40002,
  		msg: '密码错误'
  	})
  	return 
  }

  if (username == USER_NAME && password == PWD) {
  	res.send({
  		code: 200,
  		msg: '登录成功'
  	})
  	return
  }
})

module.exports = router
