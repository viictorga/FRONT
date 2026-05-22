"use client"
import "./page.css"
import { api } from "@/app/lib/api"
import { Character } from "@/app/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
type Props={
    id?:string,
    personaje?:Character
}
export const CartaGuapa =(props:Props)=>{
  const id=props.id
  const personaje=props.personaje
  const [error,setError] = useState<string>("")
  const [personajeOficial,setPersonajeOficial]= useState<Character|null>(null)
  const router = useRouter();
  useEffect(()=>{
    if(id){
         api.get(`/character/${id}`).then((e)=>{
            setPersonajeOficial(e.data)
        })
        .catch((e)=>{
            setError(e.message + "el id es este" + id)
        })
        
       
    }
    else if(personaje){
     setPersonajeOficial(personaje)
    }
  },[id,personaje])

return(
    <div className="principalCarta">
      <div className="divisor">

        <div className="imagen">
           <img src = {personajeOficial?.image}></img>
           </div>
            <div className="info1">
            <h1>Nombre: {personajeOficial?.name} </h1>
            <h2>Especie:{personajeOficial?.species} </h2>
            <h2>Status: {personajeOficial?.status}</h2>
            <div className="botonessssss"><button onClick={() =>router.push(`/character/${personajeOficial?.id}`)}> Ver más </button></div>
            </div>
       </div>
    </div>
)
}