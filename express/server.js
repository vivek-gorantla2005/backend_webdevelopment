import express from "express"
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World! welcome to express')
})

app.get('/contact', (req, res) => {
    res.send('reach us !!')
  })

  app.get('/about', (req, res) => {
    res.send('welcome to about us page')
  })

app.get('/blog', (req, res) => {
    res.send('welcome to blog guysss!!')
  })

app.get('/blog/:slug',(req,res)=>{
    res.send(`welcome to ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})