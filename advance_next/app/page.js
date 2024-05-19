
"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

import dynamic from "next/dynamic";


const DynamicH1 = dynamic(()=> import('./DynamicH1'))
// ,{ssr:false ,loading:() =><h1>...loading</h1>})

export default function Home() {
  const router = useRouter();

  return ( 
  <div>
    {/* <DynamicH1/> */}


    <p>Hello World</p>
    <h1>My Name is Khan</h1>

    
    <Image src ="/pic.png" width={1280} height ={720}/>
    {/* <Image src ="https://klyker.com/wp-content/uploads/2017/12/high-definition-photos-53.jpg" width={1280} height ={720}/> */}
  </div>
  );
}
