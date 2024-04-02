const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.static('public'))

app.post('/',(req,res)=>{
    res.send("hello express this is post")
})

app.get('/', (req, res) => {
    res.send("hello express")
})

app.get('/home', (req, res) => {
    const absolutePath = path.join(__dirname, 'templates', 'index.html');
    res.sendFile(absolutePath);
})


app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})