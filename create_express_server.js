const express = require('express');
const app = express();

const port=2000
const hostname='localhost'

app.get('/something',(req,res)=>{
    res.send('Hello Mr.Khan!!')
})

app.post('/something',(req,res)=>{
    res.send('This would not be visible')
})

app.listen(port,hostname,()=>{
    console.log("Server sent this respose")
})