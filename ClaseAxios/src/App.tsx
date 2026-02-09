import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { api } from './api/api'





const  App = () => {
  
  const [count, setCount] = useState<number>(0)
  const [palabrita, setPalabrita] = useState<string>("")

  useEffect(()=>{
    api.get("/character").then(res=>console.log(res.data))
  }, [count])


  return (
    <>
    <p>{count}</p>
    <p>{palabrita}</p>
    <button onClick={()=>{setCount(count+1)}}>Sumar 1</button>
    <input onChange={(e)=>{setPalabrita(e.target.value)}}/>
    </>
  )
}

export default App
