import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api/api'
import { CharacterById } from './components/character'
import type { Character } from './types'




const  App = () => {

  const [search,setSearch] = useState<string>("");
  const [inputName,setInputName] = useState<string>("")
  const [inputEspecie,setInputEspecie] = useState<string>("")
  const [inputEstado,setInputEstado] = useState<string>("")
  const [inputGenero,setInputGenero] = useState<string>("")
  const [characters,setCharacters] = useState<Character[]>([]);
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
      let url = "/character?"
      let primeraaa = true; 

      if(inputName)  {     
        if(primeraaa){
          url = url + "name=" + inputName;
          primeraaa = false;
        }else{
          url = url + "&" + "name=" + inputName;
        } 
      }
      if(inputEspecie)  {     
        if(primeraaa){
          url = url + "species=" + inputEspecie;
          primeraaa = false;
        }else{
          url = url + "&" + "species=" + inputEspecie;
        } 
      }
      if(inputEstado)  {     
        if(primeraaa){
          url = url + "status=" + inputEstado;
          primeraaa = false;
        }else{
          url =  url + "&"+ "status=" + inputEstado;
        } 
      }
      if(inputGenero)  {     
        if(primeraaa){
          url = url + "gender=" + inputGenero;
          primeraaa = false;
        }else{
          url =  url + "&"+ "gender=" + inputGenero;
        } 
      }

      if(primeraaa){
        url = url + "page=" + pagina
      }
      else{
        url = url + "&page=" + pagina

      }
    api.get(`${url}`)
      .then(res => {
        setCharacters(res.data.results)
        setTotalResultados(res.data.info.count);
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
        Archivo Multidimensional de Rick & Morty
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
          {characters.map((e) => (<CharacterById key={e.id} characterin={e} />))}

      </div>


  </div>
  )
}

export default App;