"use client"
import { useEffect, useState } from "react";
import "./globals.css"
import "./page.css"
import { Cocktail } from "@/types";
import { CocktailById } from "@/components/cocktail/page";
import { api } from "@/lib/api/api";


const Home =() =>{
  const [search,setSearch] = useState<string>("");
  const [inputName,setInputName] = useState<string>("")
  const [inputEspecie,setInputEspecie] = useState<string>("")
  const [inputEstado,setInputEstado] = useState<string>("")
  const [inputGenero,setInputGenero] = useState<string>("")
  const [cocktails,setCharacters] = useState<Cocktail[]>([]);
  const [pagina, setPagina] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");
  const [totalResultados, setTotalResultados] = useState<number>(0);


      const borrarFiltros = () => {
      setInputName("");
      setInputEspecie("");
      setInputEstado("");
      setInputGenero("");

      setSearch("");
      setPagina(1);
      setCharacters([]);
    };

  
    useEffect(() => {
    if (!search) return
      let url = "/search.php?s="
      

      if(inputName)  {
          url = url + inputName;
      }
    api.get(`${url}`)
      .then(res => {
        setCharacters(res.data.drinks)
        setError("")
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message: e}`)
      })
      .finally(()=>{
        setLoading(false);
      })

  }, [search, pagina])

 return (
    <div className='mainContainer'>
      <h1 className="tituloPrincipal">
        Pagina de Cocktails
      </h1>
      <form className='buscador' onSubmit={(e) => {
            e.preventDefault();
            
            setSearch(inputName );
          }}>
            

        <label> Nombre: </label> <input type="text" value={inputName} onChange={(e) => {setInputName(e.target.value)} } onKeyDown={(e)=>{
          if(e.key == "Enter"){
            setSearch
          }
        }} />
      
        
        { search &&<button className="botonBorrarFiltros" onClick={borrarFiltros}>Borrar Filtros</button>
}
        
      </form>
      <div className="botones">
        
       
        <button  onClick={() => setSearch(inputName)}> Buscar </button>
       
      </div>
      
      
      {search && loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}
      <div className="characterContainer">
          {cocktails ? <> {cocktails.map((e) => (<CocktailById key={e.idDrink} cocktelin={e} />))} </>: <div>No se ha ecnotrado ningun cocktail con este nombre </div>}

      </div>


  </div>
  )
}
export default Home;
