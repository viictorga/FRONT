"use client"

import { api } from "@/app/lib/api"
import { Character, Episode } from "@/app/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const CartaEpisodio =({episodio1} : {episodio1: Episode})=>{

  const [error,setError] = useState<string>("")
  const [episodioOficial,setEpisidioOficial]= useState<Episode|null>(null)
  const router = useRouter();
  useEffect(()=>{
        setEpisidioOficial(episodio1)
  },[episodio1])

return(
    <div>
      <div className="divisor">

        <div className="imagen">
           
            <div className="info"></div>
            <h1>Nombre: {episodioOficial?.name} </h1>
            <h2>Lanzamiento:{episodioOficial?.air_date} </h2>
            <h2>Creado: {episodioOficial?.created}</h2>
            
            </div>
       </div>
    </div>
)
}