import express from 'express'
import path  from 'path'
import  mongoose  from 'mongoose'
import {Employee} from "./models/model.js"
const app = express()
const port = 3000

let conn = await mongoose.connect("mongodb://localhost:27017/EmployeeDB")

app.set('view engine','ejs')

 app.get('/generate', async(req, res) => {

    await Employee.deleteMany({})
    let name = ["vivek","viven","sree","devi"]
    let salary =[20000,10000,50000,4000]
    let language = ["python","java","c#","php"]
    let city = ["hyd","banglore","delhi","andhra"]
    let isManager = [true,false,true,false]
    for(let i = 0 ; i < 4 ; i++){
        const employee = new Employee({name : name[i], salary : salary[i], language : language[i],city : city[i], isManager: isManager[i]})
        employee.save()
}
  res.render('index')
 })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})