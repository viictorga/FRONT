"use client"

import { useRouter } from "next/navigation"
import { useLista } from "@/context/ContextList"
import { useState } from "react"
import { useSearch } from "@/context/searchContext"

const Buscador = () => {
  const [inputName, setInputName] = useState("")
  const { lista } = useLista()
  const { setSearch } = useSearch()
  const router = useRouter()

  return (
    <div className="headerContainer">
      <h1 className="tituloPrincipal">Pagina de Cocktails</h1>

      <form
        className="buscador"
        onSubmit={(e) => {
          e.preventDefault()
          setSearch(inputName)   
        }}
      >
        <label>Nombre:</label>

        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />

        <button type="submit">Buscar</button>

        <button
          type="button"
          onClick={() => {
            setInputName("")
            setSearch("")
          }}
        >
          Borrar filtros
        </button>
      </form>

      <div className="botones">
        <button onClick={() => router.push("/lista")}>
          Favoritos ({lista.length})
        </button>
      </div>
    </div>
  )
}

export default Buscador