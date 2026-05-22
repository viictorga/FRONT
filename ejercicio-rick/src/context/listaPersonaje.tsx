"use client"

import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";

// aquí se define todo lo que queremos que dé el provider
type TipoPersonajeContexto = {
    listaFav : string[],
    // vamos a hacer que sea lista de ids que si no peta 
    addToLista : (Personaje:string) => void;
    
}

const PersonajeContexto = createContext <TipoPersonajeContexto|null> (null)

export const PersonajeProvider = ({children}:{children:React.ReactNode}) =>{
 const [listaFav, setListaFav] = useState <string[]>([])
 useEffect(()=>{
  const guardado= localStorage.getItem("personajes")
  if (guardado) {const arrayStored = guardado ? guardado?.split(','):[];
    setListaFav(arrayStored)
  }
 },[])
 useEffect(()=>{
   localStorage.setItem("personajes",String(listaFav))
 },[listaFav])
 const addToLista = (Personaje:string) =>{
    setListaFav([...listaFav,Personaje])
 }
return (
    <div>
        <PersonajeContexto.Provider value ={{listaFav,addToLista}}>{children}
            </PersonajeContexto.Provider >

    </div>
)
}
export const useLista=()=>{
    const Context=useContext(PersonajeContexto);
    if(!Context){throw new Error("TSX OUT OF LISTA CONTEXT")}
    return Context;
}