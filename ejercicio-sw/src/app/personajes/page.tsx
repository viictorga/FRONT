"use client"
import { useRouter } from "next/navigation";
import "./page.css"
import { useEffect, useState } from "react";
import { api } from "@/api/api";
import { Character } from "@/types";
import { CartaPersonaje } from "../components/personajeCard/card";

const Personajes = () =>{
  const router = useRouter();
  const [personajes, setPersonajes] = useState<Character[] | null>(null)
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(()=>{
    api.get("/people").then((res)=>{
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
            return <CartaPersonaje key={e.name} personaje={e}></CartaPersonaje>
        })}
      
    </div>
  );
}
export default Personajes;
