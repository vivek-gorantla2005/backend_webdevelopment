const { error } = require('console');
const fs = require ('fs')

console.log("starting");

fs.writeFileSync("files.txt","this is a text file")

fs.writeFile("files2.txt","this  is a new file",()=>{
    console.log("done")
    fs.readFile("files.txt",(error,data)=>{
        console.log(error , data.toString())
    })
})

fs.appendFile("files.txt","iam vivek",(e,d)=>{
    console.log(e,d)
})

console.log("ending")