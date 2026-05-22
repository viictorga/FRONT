"use client"
import { useLista } from "@/context/listaPersonaje";
import { CartaGuapa } from "../components/characterCard/characterCard";



const listaFavoritos = () =>{
const {listaFav} = useLista()

return(
    <div>
        {listaFav.map((e)=>{
            return <CartaGuapa key ={e} id = {e} ></CartaGuapa>
        })}
    </div>
)
}
export default listaFavoritos   