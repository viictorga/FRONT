import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api/api'
import { CharacterById } from './components/character'
import type { Character } from './types'

import { CharcacterDetalladito } from './components/characterDetallado'



const  App = () => {

  const [search,setSearch] = useState<string>("");
  const [inputName,setInputName] = useState<string>("")
  const [inputEspecie,setInputEspecie] = useState<string>("")
  const [inputEstado,setInputEstado] = useState<string>("")
  const [inputGenero,setInputGenero] = useState<string>("")
  const [characters,setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");
  
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

      
      console.log(url);
    api.get(`${url}`)
      .then(res => {
        setCharacters(res.data.results)
        setError("")
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message: e}`)
      })
      .finally(()=>{
        setLoading(false);
      })

  }, [search])

 return (
    <div className='mainContainer'>
      
      <form className='buscador' onSubmit={(e) => {
            e.preventDefault();
            
            setSearch(inputName + inputEspecie + inputEstado + inputGenero);
          }}>
        <label> Nombre: </label> <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value) }/>
      
        <label> Especie: </label> <input type="text" value={inputEspecie} onChange={(e) => setInputEspecie(e.target.value)}/>
      
        <label> Estado: </label> <input type="text" value={inputEstado} onChange={(e) => setInputEstado(e.target.value)}/>

        <label> Genero: </label> <input type="text" value={inputGenero} onChange={(e) => setInputGenero(e.target.value)}/>

        <button className="botoncito"></button>
        
      </form>
      <button onClick={() => setSearch(inputName + inputEspecie + inputEstado + inputGenero)}> Buscar </button>
      {search && loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}
      <div className="characterContainer">
  {
  selectedCharacter ? <CharcacterDetalladito id={selectedCharacter.id} />
    : characters.map((e) => (
  <CharacterById
    key={e.id}
    characterin={e}
    onSelect={() => setSelectedCharacter(e)}
  />
))

}

</div>


    </div>
  )
}

export default App;