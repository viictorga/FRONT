
"use client"

import { api } from "@/api/api"
import EpisodeChulo from "@/components/Episode/page"
import Paginador from "@/components/Paginador"
import { ResultEpisodes } from "@/types"
import { useEffect, useState } from "react"


const PageEpisodes = () => {
    const [resultCharacters, setResultCharacters] = useState<ResultEpisodes | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [page, setPage] = useState<number>(1)
    const getCharacters = async (page: number) =>{
            try {
                api.get(`/episode?page=${page}`).then((e)=>{
                    const {data}: {data: ResultEpisodes} = e;
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
            console.log(page)
        }, [page])
    return (
        <div>
            <h1>Personajitos</h1>
            {resultCharacters && resultCharacters.results.map((e)=>
                (<EpisodeChulo key={e.id} episode={e}></EpisodeChulo>)
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
export default PageEpisodes;