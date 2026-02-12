import { useEffect, useState } from "react";
import { api } from "../../api/api"
import "./style.css"
import type { Character } from "../../types";


export const CharacterById = (params: {id?: string, characterin?: Character}) =>{
    const id = params.id;
    const paramsCharacter = params.characterin;


    const [character, setCharacter] = useState<Character | null>(paramsCharacter ? paramsCharacter : null);

    useEffect(()=> {
       !character && id && api.get(`/character/${id}`).then(res=>{
        setCharacter(res.data)
       })

    }, [id])

    return (
        <>
            {character ? <div className="characterContainer">
              
                <img src={character?.image}></img>
                <div className="characterDataContanier">
                    <h1 className="Nombre">{character?.name}</h1>
                    <p> Origen: {character?.origin.name}</p>
                    <p> Estado: {character?.status}</p>
                    <p> Especie: {character?.species}</p>
                    <p> Genero: {character?.gender}</p>
                </div>
            
            </div> : <p>Loading...</p>}
        </>
    )
}