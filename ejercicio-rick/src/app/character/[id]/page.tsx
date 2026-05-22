"use client"

import { api } from "@/app/lib/api"
import { Character } from "@/app/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useLista } from "@/context/listaPersonaje"

const paginaPersonaje= () =>{
    const {id} = useParams()
      const [error,setError] = useState<string>("")
      const [personajeOficial,setPersonajeOficial]= useState<Character|null>(null)
      const router = useRouter()
      const {addToLista} = useLista()
    useEffect(()=>{
       if(id){
            api.get(`/character/${id}`).then((e)=>{
               setPersonajeOficial(e.data)
           })
           .catch((e)=>{
               setError(e.message + "el id es este" + id)
           })
           
          
       }
      
     },[id])
    return(
    <div>
        <div className="imagen">
           <img src = {personajeOficial?.image}></img>
            <div className="info"></div>
            <h1>Nombre: {personajeOficial?.name} </h1>
            <h2>Especie:{personajeOficial?.species} </h2>
            <h2>Status: {personajeOficial?.status}</h2>
            <button onClick={router.back}> ATRAS </button>
            <button onClick={() => addToLista(String(id))}>Añadir a favs</button>
            </div>
    </div>
    )
    
}
export default paginaPersonaje