const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 2000;
const hostname = 'localhost';

// Serve static files from the 'public' directory
app.use(express.static(path.resolve(__dirname, 'public')));

// Parse JSON bodies
app.use(bodyParser.json());

// Handle POST requests to '/data' endpoint
app.post('/data', (req, res) => {
    console.log(req.body);
    res.json({ status: 'ok' });
});

// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


// const bodyParser = require('body-parser');
// const express = require('express');
// const path = require('path');
// const app = express();


// const port=2000
// const hostname='localhost'

// app.use('/',express.static(path.resolve(__dirname,'public/form.html'))
// )

// app.use(bodyParser.json())

// app.post('/data',(req,res)=>{
//     console.log(req.body)
//     res.json({status:'ok'}
//     )
// })

// app.listen(port,hostname,()=>{
//     console.log("Server sent this respose")
// })