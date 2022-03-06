module.exports = app => {
  app.use('/api', require('./login'))
  app.use('/api', require('./produceWord'))
  app.use('/api/', require('./excel'))
}
