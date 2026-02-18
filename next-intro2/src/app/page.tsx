"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import  "./page.css"

const Home = () =>{

  const router = useRouter();

  return (
    <div>
      <h1>Hola mundo</h1>
      <Link href="/laOtra"> Si pinchas aqui te lleva a la otra </Link>
      <img className= "linkQuenoesLink"src="/homer.jpg" onClick={()=> router.push("/laOtra")}/>
    </div>
  );
}



export default Home;