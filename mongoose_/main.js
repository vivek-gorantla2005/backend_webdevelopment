import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/Todo.js"
const app = express()
const port = 3000

let conn = await mongoose.connect("mongodb://localhost:27017/")


app.get('/', (req, res) => {
    const todo = new Todo({title : "my first todo", desc : "this is th description of te todo",isDone : false})
    todo.save()
    res.send('Hello World')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})