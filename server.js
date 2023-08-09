const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = 9999
app.get('/', (req, res)=>{
  res.send('ok')
})
server.listen(port, ()=>{
  console.log('server running');
})
