import { useRouter } from "next/router";
export default function Mufun(){
    const router = useRouter()
    console.log(router.query)
    return <h1>My name is Khan</h1>
}