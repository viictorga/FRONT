"use client"
import { useParams } from "next/navigation"
import { Cocktail } from "@/types"
import { useState } from "react"
import { useEffect } from "react"
import "./page.css"
import { getCocktailById } from "@/lib/api/cocktail"
import { useRouter } from "next/navigation"



const UnCocktail = () =>{
    const router = useRouter();
    const {id} = useParams()
    let idBueno = Number(id);
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [miError, setError] = useState<string>("");

        
          useEffect(() => {
            getCocktailById(Number(idBueno)).then((res)=>{
                
                const arrayMiCocktail = res.data.drinks
                setCocktail(arrayMiCocktail[0])
                setError("")
            }).catch((e)=>{
              setError(`Error cargando los datos: ${e.message ? e.message: e}`)

            }).finally(()=>{
              setLoading(false);
            })
          }, [idBueno]);



    return(
  
    <div className="containerDetalle">

      {loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}

      {cocktail && (
        <>
          <h1>{cocktail.strDrink}</h1>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
        </>
      )}

    </div>
  )

}
export default UnCocktail;