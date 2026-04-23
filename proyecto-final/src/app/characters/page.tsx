"use client"
import { api } from "@/api/api";
import CharacterChulo from "@/components/Character";
import Paginador from "@/components/Paginador";
import { ResultCharacters } from "@/types";
import { useEffect, useState } from "react";




const PageCharacters = () => {

    const [resultCharacters, setResultCharacters] = useState<ResultCharacters | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [page, setPage] = useState<number>(1)

    const getCharacters = async (page: number) =>{
        try {
            api.get("/character").then((e)=>{
                const {data}: {data: ResultCharacters} = e;
                setResultCharacters(data);
                
            }).finally(()=>{
            setLoading(false)
        })
            
        } catch (e: any) {
            setError(e)
            
        }

    }

    useEffect(()=>{
        getCharacters(page)
    })
    return (
        
        <div>
            <h1>Personajitos</h1>
            {resultCharacters && resultCharacters.results.map((e)=>
                (<CharacterChulo key={e.id} character={e}></CharacterChulo>)
            )}
            <Paginador 
                next={!!resultCharacters?.info.next}
                prev={!!resultCharacters?.info.prev}
                page={page}
                setPage={(e : any)=>setPage(e)}
            
            
            
            ></Paginador>
        </div>

    )
}
export default PageCharacters;