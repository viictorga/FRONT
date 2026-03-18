import { useEffect, useState } from "react";
import { api } from "../../lib/api/api"
import "./page.css"
import type { Cocktail } from "../../types";
import { useRouter } from "next/navigation";
import { useLista } from "@/context/ContextList";
import { getCocktailById } from "@/lib/api/cocktail";


export const CocktailById = (params: {id?: string, cocktelin?: Cocktail, onSelect?: () => void}) =>{
    const id = params.id;
    const paramsCharacter = params.cocktelin;

    const router = useRouter();

        const {lista, addLista} = useLista();

    const [cocktail, setCocktail] = useState<Cocktail | null>(paramsCharacter ? paramsCharacter : null);
    useEffect(()=>{
        console.log(id);
        getCocktailById(Number(id)).then((res)=>{
            setCocktail(res.data.drinks[0])
        })
    })



    return (
        <>
            {cocktail ? <div className="characterContainer">
              <div className="unPersonaje">
                <img src={cocktail?.strDrinkThumb!}></img>
                <div className="characterDataContanier">
                     <h1 className="Nombre">{cocktail?.strDrink}</h1>
                    <p> Categoria: {cocktail?.strCategory}</p>
                    <p> Alcoholico: {cocktail?.strAlcoholic}</p>
                   
                    <p>
                        <button className="botonVer" onClick={()=> router.push(`/cocktail/${cocktail.idDrink}`)} >Ver a {cocktail?.idDrink}</button>
                        <button className="botonVer" onClick={()=> {addLista(cocktail.idDrink); }} >Añadir a lista a  {cocktail?.idDrink}</button>
                    </p>
                </div>
            </div>
            
            </div> : <p>Loading...</p>}
        </>
    )
}