"use client"
import router from "next/router"
import { useParams } from "next/navigation"
import { api } from "@/lib/api/api"
import { Character } from "@/types"
import { useState } from "react"
import { useEffect } from "react"
import "./page.css"
import { getCharacterById } from "@/lib/api/character"

const PersonajitoAmpliado = () =>{

    const {id} = useParams()
    const [character, setCharacter] = useState<Character | null>(null);
        
          useEffect(() => {
            getCharacterById(Number(id)).then((res)=>{
                setCharacter(res.data)
            })
          }, [id]);
        
          
    return (
        <>
        
            <div className="contenedorPrincipal">
              {character ? (
                <div className="characterDetail">
                  <img src={character.image}  />
        
                  <h1>{character.name}</h1>
        
                 <p>ID: {character.id}</p>
                <p>Estatus: {character.status}</p>
                <p>Especie: {character.species}</p>
                <p>Tipo: {character.type || "N/A"}</p>
                <p>Genero: {character.gender}</p>
        
                <p>Origen: {character.origin.name}</p>
                <p>Origen URL: {character.origin.url}</p>
        
                <p>Localizacion: {character.location.name}</p>
                <p>Localizacion URL: {character.location.url}</p>
        
                <p>URL: {character.url}</p>
                <p>Creado: {character.created}</p>
        
        
                 
        
                  <button onClick={() => router.back()}>Volver</button>
                </div>
              ) : (
                <h1>No se ha encontrado el personaje</h1>
              )}
            </div>


        </>
    )
}
export default PersonajitoAmpliado;