
use("CRUDdb")

db.createCollection("courses")

// create

// db.courses.insertOne({
//     "name" : "vivek",
//     "course" : "javascript",
//     "price" : 20000,
//     "projects" : 30,
// })

// db.courses.insertMany([
//     {
//         "name": "sara",
//         "course": "python",
//         "price": 25000,
//         "projects": 25
//         },
//         {
//         "name": "john",
//         "course": "java",
//         "price": 18000,
//         "projects": 35
//         },
//         {
//         "name": "emma",
//         "course": "HTML/CSS",
//         "price": 15000,
//         "projects": 20
//         }
// ])



// // read

// let a = db.courses.find({price : 20000})
// let b = db.courses.count()
// console.log(b)
// console.log(a)




//update


db.courses.updateMany({price : 20000}, {$set:{price:10000}})


//delete


db.courses.deleteOne({price : 15000})

db.courses.deleteMany({price : 15000})





//query and projection operators

// https://www.mongodb.com/docs/manual/reference/operator/query/