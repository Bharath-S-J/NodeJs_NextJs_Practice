//styled-JSX
import styles from './tesst.module.scss'


// export  function getServerSideProps(){
//     console.log('Hiii : ', process.env.SECRET_VARIABLE)
//     return{
//         props:{}
//     }
// }

export  function getStaticProps(){
    console.log('Hiii : ', process.env.SECRET_VARIABLE)
    return{
        props:{}
    }
}

export default function nice() {
    console.log('env value : ',process.env.SECRET_VARIABLE,process.env.NEXT_PUBLIC_MY_FIRST_BROWSERVARIABLE)

    return (
       <div>


       <h1 className="text-orange-600 mx-[600px] my-[400px] bg-white text-center inline-block text-4xl bold">My Name is Khan <span className="text-cyan-400 text-2xl bg-pink-400">  & we are Khans</span></h1>

       <h2 className={styles.hi}> <span> & we have Jan {process.env.SECRET_VARIABLE}</span> My name is Jan</h2>
       </div>




    )
}
