# 使用 Node 官方提供的镜像
FROM node:6.10.0

# 镜像作者
MAINTAINER YJF <fatejane@163.com>

RUN mkdir -p /web_ouji_server

# 指定工作目录
WORKDIR /web_ouji_server

COPY package.json /web_ouji_server/
# 由于使用 npm 官方源下载较慢，故改用淘宝的源
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm install pm2 -g
COPY . /web_ouji_server

# 启动服务
RUN pm2 start index.js

