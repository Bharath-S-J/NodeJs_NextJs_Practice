import { NextApiRequest,NextApiResponse } from "next";

const handler = (req: NextApiRequest,res: NextApiResponse) =>{
    //It must not be react's components
    const body =req.body
    console.log(body)

    // console.log('REQUEST QUERY',req.query)
    // res.send("My Name is Khan")
    //  res.setHeader('X-Custom-Header',"We are Khans")
     res.setHeader('Set-Cookie','reallykhans=true;')
    res.status(200).end("Hello")
    // res.status(404).end("Hello")
    // res.statusCode = 404
   


}
export default handler