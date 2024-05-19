const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("Hello to all the clients over there")
    res.end()
})
const hostname ='localhost'
const port = 2000

server.listen(port,hostname,() =>{
         console.log("Ready to take requests")
     })