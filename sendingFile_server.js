const express = require('express');
const path = require('path');
const app = express();

const port=2000
const hostname='localhost'

app.get('/html',(req,res)=>{
    res.sendFile(
        path.resolve(__dirname,'Simple.html')
    )
})

app.listen(port,hostname,()=>{
    console.log("Server sent this respose")
})