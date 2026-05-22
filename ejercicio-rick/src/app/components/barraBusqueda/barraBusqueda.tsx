"use client"
import "./page.css"
import { useState } from "react"
import { useSearch } from "@/context/searchContext"
import { useParams, useRouter } from "next/navigation"

export const Busqueda= ()=>{
    const router = useRouter();
   
  const {setSearch}=useSearch()
  const [name,setName] = useState<string>("")
    return(
     <div className="generalBarra">
        <div className="busquedaBarra">
        <label>Nombre: </label>
        <input onChange={(e)=>{setName(e.target.value)}}>
         
        </input>
        <button onClick={()=>{setSearch(name); setName("")}}>Buscar</button>
        </div>
        <div className="botonesBarra">
            <button onClick={()=> router.push(`/localizaciones`)}>Localizaciones</button>
            <button onClick={()=> router.push(`/episodes`)}>Episodios</button>

        </div>
     </div>
    )
}