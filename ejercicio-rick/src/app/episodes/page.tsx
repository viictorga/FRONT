"use client"
import "./page.css"
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { useSearch } from "@/context/searchContext";
import { useRouter } from "next/navigation";
import { Episode } from "../types";
import { FuncionPaginacion } from "../components/paginador";
import { CartaEpisodio } from "../components/episodeCard/episode";


const Episodios = () =>{
    const [episodios,setEpisodios] = useState<Episode[]>([])
      const [loading,setLoading] = useState<boolean>(true)
      const [error,setError] = useState<string>("")
      const {search}=useSearch()
      const [page,setPage]=useState<number>(1)
      const [prev,setPrev]=useState<boolean>(true)
      const [next,setNext]=useState<boolean>(true)
      useEffect(()=>{
        const llamada = api.get(`/episode?page=${page}`)
        llamada.then((e)=>{
          setEpisodios(e.data.results)
          setPrev(e.data.info.prev)
          setNext(e.data.info.next)
          
        })
        .catch((e)=>{
            setError(e.message)
        })
        .finally(()=>{
          setLoading(true)
        })
      
    
      },[page])



    return(
        <div className="general1">
            <h1> EPISODIOS</h1>
            <div className="episodios"> 
            {episodios && episodios.map((e)=>{
               return <CartaEpisodio episodio1={e}></CartaEpisodio>
            })
            }

            </div>


            <FuncionPaginacion page={page} prev={prev} next={next} setPage={setPage}></FuncionPaginacion>
        </div>
    )
}

export default Episodios;