"use client"
import "./page.css";
import { useRouter } from "next/navigation";

const Home = ()=> {
  const router = useRouter();
  return (
    <div>
      <h1>Pagina principal</h1>
      <button onClick={(()=>{ router.push('/importante')})}>Ir a importante</button>
      <button onClick={(()=>{ 
        document.cookie = "legal=true; path=/;"

      })}>Soy legal</button>
      <button onClick={(()=>{ 
        document.cookie = "legal=; expires=Thu, 01 Jan 1970 00:00 UTC; path=/;"

        
      })}>Soy un macarra</button>
    </div>
  );
}
export default Home;
