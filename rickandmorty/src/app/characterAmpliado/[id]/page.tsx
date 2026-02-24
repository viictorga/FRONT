"use client"
import { useParams } from "next/navigation"
import { Character } from "@/types"
import { useState } from "react"
import { useEffect } from "react"
import "./page.css"
import { getCharacterById } from "@/lib/api/character"
import { useRouter } from "next/navigation"

const PersonajitoAmpliado = () =>{

    const router = useRouter();
    const {id} = useParams()
    let idBueno = Number(id);
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [miError, setError] = useState<string>("");

        
          useEffect(() => {
            getCharacterById(Number(idBueno)).then((res)=>{
                setCharacter(res.data)
                setError("")
            }).catch((e)=>{
              setError(`Error cargando los datos: ${e.message ? e.message: e}`)

            }).finally(()=>{
              setLoading(false);
            })
          }, [idBueno]);
          
          
    return (
        <>
        
            <div className="contenedorPrincipal">
              {!miError && !loading &&character && (
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
                <button onClick={()=> router.push(`/characterAmpliado/${idBueno +1}`)}>Ir al personaje {idBueno + 1}</button>
                <button onClick={()=> router.push(`/characterAmpliado/${idBueno -1}`)}>Ir al personaje {idBueno - 1}</button>
        
                 
        
                  <button onClick={() => router.back()}>Volver</button>
                </div>
              )}

              { loading && <h1>Loading...</h1>}
              {miError && <h2>{miError}</h2>}
            </div>


        </>
    )
}
export default PersonajitoAmpliado;