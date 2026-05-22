"use client"
import "./page.css"
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { useSearch } from "@/context/searchContext";
import { useRouter } from "next/navigation";
import { Episode, Location } from "../types";
import { FuncionPaginacion } from "../components/paginador";
import { CartaEpisodio } from "../components/episodeCard/episode";
import { LocationChula } from "../components/locationsCard/locationsCars";


const Episodios = () =>{
    const [locations,setLocations] = useState<Location[]>([])
      const [loading,setLoading] = useState<boolean>(true)
      const [error,setError] = useState<string>("")
      const {search}=useSearch()
      const [page,setPage]=useState<number>(1)
      const [prev,setPrev]=useState<boolean>(true)
      const [next,setNext]=useState<boolean>(true)
      useEffect(()=>{
        const llamada = api.get(`/location?page=${page}`)
        llamada.then((e)=>{
          setLocations(e.data.results)
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
        <div className="generalLocations">
            <h1> EPISODIOS</h1>
            <div className="locations"> 
            {locations && locations.map((e)=>{
               return <LocationChula localizacion={e}></LocationChula>
            })
            }

            </div>


            <FuncionPaginacion page={page} prev={prev} next={next} setPage={setPage}></FuncionPaginacion>
        </div>
    )
}

export default Episodios;