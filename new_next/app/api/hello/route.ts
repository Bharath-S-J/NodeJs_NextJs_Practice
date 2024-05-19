
export async function GET(Request: Request){
    //It must not be react's components
    return new Response('hi')
}
export async function POST(req:Request) {
    const body = await req.json
   
    return new Response(JSON.stringify({Hi:'Guys'}))
}
