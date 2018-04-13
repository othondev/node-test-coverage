const http = require('http')
const app = require('express')()
const version = require('./package').version
const netInfo = require('./services/networkInfoService')
const bodyParser = require('body-parser')
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res) => res.send({status:'On yet!',time:new Date().toTimeString(),version}))

app.get('/info',(req,res)=> netInfo((error,response)=>{
  if(error)
    res.status(500).send(error)
  else
    res.status(200).send(response)
}))

app.listen(PORT,()=>console.log(`Listen on ${PORT}`))
