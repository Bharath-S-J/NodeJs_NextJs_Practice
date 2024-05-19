const express = require('express');
const path = require('path');
const app = express();

const port=1000
const hostname='localhost'

app.use('/static',express.static(path.resolve(__dirname,'newfile.txt'))
)

// app.get('/html',(req,res)=>{
//     res.sendFile(
//         path.resolve(__dirname,'Simple.html')
//     )
// })



app.listen(port,hostname,()=>{
    console.log("Server sent this respose")
})