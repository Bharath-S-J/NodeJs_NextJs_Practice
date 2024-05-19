import type { GetStaticProps } from "next"
import  { GetServerSideProps } from "next";

interface MyComponentProps{
    mynum:number;
}

// //Executes on server
// export const GetStaticProps: GetStaticProps = async( context )=>{
//     const mynum =5;

//     console.log('mynum:',mynum);
//     return{
//         props:{
//             mynum 
//         }
//     }
// }


//Called always on every page request >Even on production
export const GetServerSideProps: GetServerSideProps = async( context )=>{
    const mynum =5;

    console.log('mynum:',mynum);
    return{
        props:{
            mynum 
        }
    }
}

// export default function MyComponent({mynum}:MyComponentProps){
//     return <h1>Dynamic Number : {mynum}</h1>
// }
export default function MyComponent(props:MyComponentProps){
    console.log(props);
    return <h1>Dynamic Number : {props.mynum}</h1>
}