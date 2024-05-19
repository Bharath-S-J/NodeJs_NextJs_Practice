import { NextApiRequest,NextApiResponse } from "next";
// import { Jwt } from "jsonwebtoken";

// export async function GET(Request: Request){
//     //It must not be react's components
//     return new Response('hi')
// }
// export async function POST(req:Request) {
//     const body = await req.json

    
   
//     return new Response(JSON.stringify({Hi:'Guys'}))
// }
const KEY = "my_name_is_khan"
const handler = (req: NextApiRequest,res: NextApiResponse) =>{
    //It must not be react's components
    const body =req.body
    if(!req.body){
        res.statusCode = 404
        res.end('Error')
        return
    }
    const{username,password}=req.body
    const jwt =require ('jsonwebtoken')
    
    res.json({
        token:jwt.sign({ username,admin:username === 'Mr.Khan' && password === 'aadmi'},KEY)
    });

    // const x= jwt.verify(token,'diiiiiinxjn') 
    // console.log(x)
}
   export default handler


    // res.json({
    //      Values :  {

    //         username,admin:username === 'admin' && password === 'aadmi'

    //     ,KEY}
    // })
    // console.log(body)
    // res.status(200).end("Hello")

    // console.log('REQUEST QUERY',req.query)
    // res.send("My Name is Khan")
    //  res.setHeader('X-Custom-Header',"We are Khans")
    // console.log(req.body)
    //  res.setHeader('Set-Cookie','reallykhans=true;')
    // res.status(200).end("Hello")
    // res.status(404).end("Hello")
    // res.statusCode = 404
   
