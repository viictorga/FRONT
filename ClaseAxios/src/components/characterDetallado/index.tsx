import { useEffect, useState } from "react";
import { api } from "../../api/api"
import "./style.css"
import type { Character } from "../../types";




export const CharcacterDetalladito = ({id} :{id: number}) =>{
    
    
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  useEffect(()=> {
       !selectedCharacter && id && api.get(`/character/${id}`).then(res=>{
        setSelectedCharacter(res.data)
       })

    }, [id])

    if(!selectedCharacter) return(<p> Cargando...</p>)
    return(
        <div>
            <img src={selectedCharacter.image} />
            <h1>{selectedCharacter.name}</h1>
            <p>Origen: {selectedCharacter.origin.name}</p>
            <p>Estado: {selectedCharacter.status}</p>
            <p>Especie: {selectedCharacter.species}</p>
            
    </div>
    )


}