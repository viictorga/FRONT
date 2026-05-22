"use client"
import { useLista } from "@/context/listaPersonaje";
import { Character } from "./types";
import { useEffect, useState } from "react";
import "./page.css"

import { useSearch } from "@/context/searchContext";

import { useRouter } from "next/navigation";

import { api } from "./lib/api";
import { Busqueda } from "./components/barraBusqueda/barraBusqueda";
import { CartaGuapa } from "./components/characterCard/characterCard";
import { FuncionPaginacion } from "./components/paginador";

const Home = ()=> {
  // ya se puede utilizar en cualquiera al estar en el contexto + layout
  const {listaFav,addToLista} = useLista()
  const [personajes,setPersonajes] = useState<Character[]>([])
  const [loading,setLoading] = useState<boolean>(true)
  const [error,setError] = useState<string>("")
  const {search}=useSearch()
  const router = useRouter()
  const [page,setPage]=useState<number>(1)
  const [prev,setPrev]=useState<boolean>(true)
  const [next,setNext]=useState<boolean>(true)
  useEffect(()=>{
    const llamada = api.get(`/character/?name=${search}&page=${page}`)
    llamada.then((e)=>{
      setPersonajes(e.data.results)
      setPrev(e.data.info.prev)
      setNext(e.data.info.next)
      
    })
    .catch((e)=>{
        setError(e.message)
    })
    .finally(()=>{
      setLoading(true)
    })
  

  },[search,page])
  
  
  return (
    <div>
      
      <Busqueda></Busqueda>
       <button onClick={() => router.push(`/favoritos`)}>Ver favoritos</button>
       <div className="personajesChupis">
          {personajes && (personajes.map((e)=>{
            return <CartaGuapa key = {String(e.id)} personaje= {e}></CartaGuapa>
          }))}
      </div>
       <FuncionPaginacion page={page} prev={prev} next={next} setPage={setPage}></FuncionPaginacion>
      
    </div>
    
  );
  
}

export default Home