"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";



type ListaContextType = {
    lista: string[],
    addLista: (item:string) => void;
    deleteFromLista: (item:string) => void;
}



const ListaContext = createContext<ListaContextType | null>(null);

export const ListaProvider = ({children} : {children: ReactNode}) =>{

    const [lista, setLista] = useState<string[]>([]);

    useEffect(() => {
    const stored = localStorage.getItem("listilla")

    if (stored) {
        const arrayStored = stored ? stored?.split(',') : [];
        setLista(arrayStored)
    }
}, [])
    useEffect(()=>{
        localStorage.setItem("listilla", String(lista))
    }, [lista])

    const addLista = (item: string) =>{
        setLista([...lista, item]);
        
    }
    const deleteFromLista = (item: string) =>{
        setLista(lista.filter((n)=> n !== item))
    }
    return(
        <div>
            <ListaContext.Provider value={{lista,addLista,deleteFromLista}}>
                {children}
            </ListaContext.Provider>
        </div>
    )
}


export const useLista = () =>{
    const context = useContext(ListaContext);
    if(!context){
        throw new Error("tsx out of lista context")
    }
    return context;
}