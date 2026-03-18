"use client"

import { CocktailById } from "@/components/cocktail/page";
import { useLista } from "@/context/ContextList"




const ListaMostrar = () =>{
    const {lista} = useLista();

    return(
        <div>
        {lista ? <> {lista.map((e) => (<CocktailById id={e} />))} </>: <div>No se ha ecnotrado ningun cocktail con este nombre </div>}
        </div>
    )
}
export default ListaMostrar;