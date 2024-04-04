const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use((req,res,next)=>{
    req.text = "welcome user!!"
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}\n`)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World! welcome to express  '+ req.text)
  })
  


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })