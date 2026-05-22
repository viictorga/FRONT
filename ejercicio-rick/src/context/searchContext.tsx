"use client"
import { Children, createContext, ReactNode, useContext, useState } from "react"

type BusquedaType ={
    search:string,
    setSearch : (manolo:string)=> void 
}

const BusquedaContexto = createContext<BusquedaType|null> (null)

export const BuscarProvider = ({children}:{children:React.ReactNode}) =>{
    const [search,setSearch] = useState<string> ("")
    return(
        <div>
            <BusquedaContexto.Provider value = {{search,setSearch}}>{children}</BusquedaContexto.Provider>
        </div>
    )
}
export const useSearch=()=>{
    const Context=useContext(BusquedaContexto);
    if(!Context){throw new Error("TSX OUT OF LISTA CONTEXT")}
    return Context;
}