"use client"

import { Location } from "@/app/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const LocationChula =({localizacion}:{localizacion:Location})=>{
  const [error,setError] = useState<string>("")
  const [locationOficial,setLocationOficial]= useState<Location|null>(null)
  const router = useRouter();
  useEffect(()=>{
    setLocationOficial(localizacion)
  },[localizacion])

return(
    <div>
      <div className="divisor">
    
            <div className="info"></div>
            <h1>Nombre: {locationOficial?.name} </h1>
            <h2>Tipo:{locationOficial?.type} </h2>
            <h2>Dimension:{locationOficial?.dimension} </h2>
       </div>
    </div>
)
}