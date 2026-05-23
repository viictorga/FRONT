"use client"
import { useRouter } from "next/navigation";
import "./page.css"
import { useEffect, useState } from "react";
import { api } from "@/api/api";
import { Character, Nave, Planeta } from "@/types";
import { CartaPersonaje } from "../components/personajeCard/card";
import { CartaPlaneta } from "../components/planetaCard/page";
import { CartaNave } from "../components/naveCard/card";

const Naves = () =>{
  const router = useRouter();
  const [personajes, setPersonajes] = useState<Nave[] | null>(null)
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(()=>{
    api.get("/starships").then((res)=>{
        setPersonajes(res.data);
    }).catch((e)=>{
        setError(e.message)
    }).finally(()=>{
        setLoading(false)
    })
  }, [])

  return (
    <div className="PrincipalPersonajes">
        { loading &&<h1> Loading</h1>}
        { error &&<h1> Error: {error}</h1>}
        <div className="personajesOficiales"></div>
        {personajes && personajes.map((e)=>{
            return <CartaNave key={e.name} nave={e}></CartaNave>
        })}
      
    </div>
  );
}
export default Naves;
