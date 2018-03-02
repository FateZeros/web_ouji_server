# web_ouji_server

为 web_ouji 项目写的后端服务，主要生成 docx 文档, 且提供文档下载

# 安装[docxtemplater](https://docxtemplater.com/)

```bash
npm install docxtemplater --save
npm install jszip@2 --save
npm install jszip-utils --save # only for the browser (webpack)
```

# 接口

```bash
npm install express --save
npm install body-parser --save
```


# pm2 
```bash

npm install pm2 -g

## 启动 node 服务
pm2 start/restart oujiServer.js

## 查看日志
pm2 logs
```