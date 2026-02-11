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
      })
      .catch(() => {
        setCharacters([])
      })

  }, [search])

 return (
    <div className='mainContainer'>

     <label> Nombre: </label> <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
     
      <label> Especie: </label> <input type="text" value={inputEspecie} onChange={(e) => setInputEspecie(e.target.value)}/>
     
      <label> Estado: </label> <input type="text" value={inputEstado} onChange={(e) => setInputEstado(e.target.value)}/>

      <label> Genero: </label> <input type="text" value={inputGenero} onChange={(e) => setInputGenero(e.target.value)}/>
      <button onClick={() => setSearch(inputName + inputEspecie + inputEstado + inputGenero)}> Buscar </button>

      <div className='characterContainer'>
        {characters.map((e) => <CharacterById key={e.id} characterin={e}/>)}
      </div>

    </div>
  )
}

export default App;