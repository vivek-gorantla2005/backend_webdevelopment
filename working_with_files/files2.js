import fs from "fs/promises"

let a = await fs.readFile("files.txt")

let b= await fs.writeFile("files.txt","\n \nthis is just awesome")

let c = await fs.appendFile("files.txt", "\n||this data is appended ||")

// console.log(a.toString())
console.log(b,c)