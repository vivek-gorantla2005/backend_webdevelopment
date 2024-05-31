const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/', (req, res) => {
    let sitename = "bootstrap"
    let search = "searchtext"
    res.render('index',{sitename : sitename,search : search})
})

app.get('/blog/:slug',(req,res)=>{
  // res.render("templates/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})