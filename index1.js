const { creatFile }= require('./making&WritingFile')
const fs = require('fs')
// console.log(fs.readdirSync('.'))


creatFile('test.txt','My Name is Khan & we are Khans')
// console.log(fs)
// console.log(fs.readFileSync('index.js','utf8'))

//this below evaluates the code in the given file
// eval(fs.readFileSync('index.js','utf8'))