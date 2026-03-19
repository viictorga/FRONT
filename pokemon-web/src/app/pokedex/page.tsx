"use client"

import { Pokemon } from "@/types";
import { useEffect, useState } from "react";




const MiPokedex = () =>{

    const [search,setSearch] = useState<string>("");
    const [inputName,setInputName] = useState<string>("")
    const [inputEspecie,setInputEspecie] = useState<string>("")
    const [inputEstado,setInputEstado] = useState<string>("")
    const [inputGenero,setInputGenero] = useState<string>("")
    const [pokemons,setPokemons] = useState<Pokemon[]>([]);
    const [pagina, setPagina] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [miError, setError] = useState<string>("");
    const [totalResultados, setTotalResultados] = useState<number>(0);
    const [aux, setAux] = useState<number>(0);
    const borrarFiltros = () => {
      setInputName("");
      setInputEspecie("");
      setInputEstado("");
      setInputGenero("");

      setSearch("");
      setPagina(1);
      setPokemons([]);
    };
    useEffect(()=>{
        


    }, [search, pagina])

    return (
    <div className='mainContainer'>
      <h1 className="tituloPrincipal">
        Pokedex
      </h1>
       {!miError && !loading && search&&<label className="resultadosPersonajes">{totalResultados} personajes encontrados por el multiverso</label>}
      <form className='buscador' onSubmit={(e) => {
            e.preventDefault();
            
            setSearch(inputName + inputEspecie + inputEstado + inputGenero);
          }}>
            

        <label> Nombre: </label> <input type="text" value={inputName} onChange={(e) => {setInputName(e.target.value)} } onKeyDown={(e)=>{
          if(e.key == "Enter"){
            setSearch
          }
        }} />
      
        <label> Especie: </label> <input type="text" value={inputEspecie} onChange={(e) => setInputEspecie(e.target.value)}/>
      
        <label> Estado: </label> <input type="text" value={inputEstado} onChange={(e) => setInputEstado(e.target.value)}/>

        <label> Genero: </label> <input type="text" value={inputGenero} onChange={(e) => setInputGenero(e.target.value)}/>
       
        <button className="botoncito"></button>
        { search &&<button className="botonBorrarFiltros" onClick={borrarFiltros}>Borrar Filtros</button>
}
        
      </form>
      <div className="botones">
        
        <button className="paginaMenos"onClick={()=> setPagina(pagina-1)}> ← </button>
        <button  onClick={() => setSearch(inputName + inputEspecie + inputEstado + inputGenero)}> Buscar </button>
        <button className="paginaMas" onClick={()=> setPagina(pagina+1)}> → </button>
      </div>
      
      <label className="paginas"> Pagina: {pagina}</label>
      {search && loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}
      <div className="characterContainer">
          {pokemons.map((e) => (<CharacterById key={e.id} characterin={e} />))}

      </div>


  </div>
  )
}
export default MiPokedex;