// import Image from "next/image";

'use client'
// import { Jwt } from "jsonwebtoken";
const jwt =require ('jsonwebtoken')
import { useState } from "react";
interface ApiResponse{
  token :string;
}





export default function Home() {
  const [username,setUsername]= useState<string>('')
  const [password,setPassword]= useState<string>('')
  const [message,setMessage]= useState<string>('You are not Logged in')

  async function formsubmit() {
  const res =await fetch('/api/login',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({username,password})
  }).then((t)=>t.json())

  const token =res.token

  if(token){
      const json =jwt.decode(token) as {[key:string]:string}
      setMessage(`Welcome ${json.username} & you are ${json.admin ? 'an admin' : 'not an admin!!'} `)
  }
  else{setMessage('Something went Wrong')}

  
}

    return(
      <div className="flex flex-row flex-shrink-1 border-1 border-white bg-gray-800 rounded-3xl w-[400px] mx-[500px] my-[200px] ">
            <form >
              <br />
            <h1 className="text-gray-100 text-2xl bold text-center" >Login Mr.Khan</h1>
            <br />
            <input className=" text-black bg-gray-300 mx-[70px] my-5 hover:bg-gray-900 hover:text-gray-100 rounded-md h-[30px] px-5" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br />
            <input className=" text-black bg-gray-300  mx-[70px] my-5 hover:bg-gray-900 hover:text-gray-100 rounded-md h-[30px] px-5" type="password"  name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input className="bg-red-400 mx-[160px] my-[5px] hover:bg-red-900 rounded-2xl px-5 py-2" type="button" value="Login"
            onClick={formsubmit} />
              <br />
              <br />
              <h1 className="text-gray-100 text-2xl bold text-center" >{message}</h1>
              <br />
            </form>

      </div>
    


  // const makeApiCall =async() =>{
   
  //   // await fetch('/api/hello',{
  //   //   method:'POST',body:JSON.stringify({num:Math.floor(Math.random()*10)})

  //      await fetch('/api/example',{
  //     method:'POST',body:JSON.stringify({Hello :'World'})

  //   })
  // }
  //   return ( <button onClick={makeApiCall}>Make Call</button>


      //  <h1>My Name is Khan</h1>
      // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      //       Get started by editing&nbsp;
      //       <code className="font-mono font-bold">app/page.tsx</code>
      //     </p>
      //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
      //       <a
      //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
      //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         By{" "}
      //         <Image
      //           src="/vercel.svg"
      //           alt="Vercel Logo"
      //           className="dark:invert"
      //           width={100}
      //           height={24}
      //           priority
      //         />
      //       </a>
      //     </div>
      //   </div>
  
      //   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      //     <Image
      //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      //       src="/next.svg"
      //       alt="Next.js Logo"
      //       width={180}
      //       height={37}
      //       priority
      //     />
      //   </div>
  
      //   <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      //     <a
      //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <h2 className="mb-3 text-2xl font-semibold">
      //         Docs{" "}
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //           -&gt;
      //         </span>
      //       </h2>
      //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
      //         Find in-depth information about Next.js features and API   &&&  My name is khan.
      //       </p>
      //     </a>
  
      //     <a
      //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <h2 className="mb-3 text-2xl font-semibold">
      //         Learn{" "}
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //           -&gt;
      //         </span>
      //       </h2>
      //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
      //         Learn about Next.js in an interactive course with&nbsp;quizzes!
      //       </p>
      //     </a>
  
      //     <a
      //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <h2 className="mb-3 text-2xl font-semibold">
      //         Templates{" "}
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //           -&gt;
      //         </span>
      //       </h2>
      //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
      //         Explore starter templates for Next.js.
      //       </p>
      //     </a>
  
      //     <a
      //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <h2 className="mb-3 text-2xl font-semibold">
      //         Deploy{" "}
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //           -&gt;
      //         </span>
      //       </h2>
      //       <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
      //         Instantly deploy your Next.js site to a shareable URL with Vercel.
      //       </p>
      //     </a>
      //   </div>
      // </main>
    );
  }
  