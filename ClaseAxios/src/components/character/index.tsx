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
        <>z
            {character ? <div className="characterContainer">

                <img src={character?.image}></img>
                <div className="characterDataContanier">
                    <p> Nombre: {character?.name}</p>
                    <p> Origen: {character?.origin.name}</p>
                    <p> Estado: {character?.status}</p>
                </div>

            </div> : <p>Loading...</p>}
        </>
    )
}