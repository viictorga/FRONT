"use client"
import { useRouter } from "next/navigation";
import "./globals.css"

const Home = () =>{
  const router = useRouter();
  return (
    <div className="Principal">
      <div className="botonesPrincipal">
        <button onClick={()=> router.push("/personajes")}> Personajes</button>
        <button onClick={()=> router.push("/naves")}> Naves</button>
        <button onClick={()=> router.push("/planetas")}> Planetas</button>
      </div>
      <div className="foto">
        <img src={'starwars.png'}></img>
      </div>
    </div>
  );
}
export default Home;
