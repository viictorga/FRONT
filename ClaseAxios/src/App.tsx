import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { api } from './api/api'
import { CharacterById } from './components/character'
import type { Character } from './types'



const  App = () => {
  

  const [inputtext, setInputText] = useState<string>("")
  const [search, setSearch] = useState<string>("")
  const [characters, setCharacters] = useState<Character[]> ([])

  useEffect(()=>{
    api.get(`/character?name=${search}`).then(res=>console.log(res.data))
  }, [search])


  return (
    <div className='mainContener'>
      <input type="text" onChange={(e)=>{setInputText(e.target.value)}}/>
      <button onClick={()=>{setSearch}}>Search</button>
      <div className='characterContainer'>
        {characters.map((e)=> <CharacterById key={e.id} characterin={e}/>)}
      </div>
    
    </div>
  )
}

export default App
