import { useEffect, useState } from "react";
import { api } from "../../lib/api/api"
import "./character.css"
import type { Character } from "../../types";
import { useRouter } from "next/navigation";


export const CharacterById = (params: {id?: string, characterin?: Character, onSelect?: () => void}) =>{
    const id = params.id;
    const paramsCharacter = params.characterin;

    const router = useRouter();


    const [character, setCharacter] = useState<Character | null>(paramsCharacter ? paramsCharacter : null);
    const [showMore, setShowMore] = useState<boolean>(false);

    useEffect(()=> {
       !character && id && api.get(`/character/${id}`).then(res=>{
        setCharacter(res.data)
       })

    }, [id])

    return (
        <>
            {character ? <div className="characterContainer">
              <div className="unPersonaje">
                <img src={character?.image}></img>
                <div className="characterDataContanier">
                    <h1 className="Nombre">{character?.name}</h1>
                    <p> Origen: {character?.origin.name}</p>
                    <p> Estado: {character?.status}</p>
                    <p> Especie: {character?.species}</p>
                    <p> Genero: {character?.gender}</p>
                    <p>
                        <button className="botonVer" onClick={()=> router.push(`/characterAmpliado/${character.id}`)} >Ver a {character?.name}</button>
                    </p>
                    </div>
                </div>
            
            </div> : <p>Loading...</p>}
        </>
    )
}