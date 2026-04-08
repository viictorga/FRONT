"use client"
import { useEffect, useState } from "react";
import "./globals.css"
import "./page.css"
import { Cocktail } from "@/types";
import { CocktailById } from "@/components/cocktail/page";
import { api } from "@/lib/api/api";
import { useLista } from "@/context/ContextList";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/searchContext"




const Home =() =>{
const { search, setSearch } = useSearch()
  const [inputName,setInputName] = useState<string>("")
  const [inputEspecie,setInputEspecie] = useState<string>("")
  const [inputEstado,setInputEstado] = useState<string>("")
  const [inputGenero,setInputGenero] = useState<string>("")
  const [cocktails,setCharacters] = useState<Cocktail[]>([]);
  const [pagina, setPagina] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");
  const [totalResultados, setTotalResultados] = useState<number>(0);
  const router = useRouter();
  const {lista} = useLista();
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
      

      if(search)  {
          url = url + search;
      }
    api.get(`${url}`)
      .then(res => {
        setCharacters(res.data.drinks)
        console.log(cocktails)
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
      
      
      
      <div className="characterContainer">
  {cocktails.length > 0 ? (
    cocktails.map((e) => (
      
      <CocktailById key={e.idDrink} cocktelin={e} />
    ))
  ) : (
    <div>No se ha encontrado ningún cocktail</div>
  )}
</div>


  </div>
  )
}
export default Home;
