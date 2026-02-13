import { useEffect, useState } from "react";
import { api } from "../../api/api"
import "./style.css"
import type { Character } from "../../types";
import { CharcacterDetalladito } from "../characterDetallado";


export const CharacterById = (params: {id?: string, characterin?: Character, onSelect?: () => void}) =>{
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
                    <p>
                        <button className="botonVer" onClick={()=> CharcacterDetalladito({id: character?.id})} >Ver a {character?.name}</button>
                    </p>
                </div>
            
            </div> : <p>Loading...</p>}
        </>
    )
}