import { Planeta } from "@/types"
import "./page.css"


export const CartaPlaneta = ({planeta}: {planeta:Planeta}) =>{
    return(
        <div className="principalPlaneta">
            <h1>{planeta.name}</h1>
            <p>Gravedad: {planeta.gravity}</p>
            <p>Diametro: {planeta.diameter}</p>
            <p>Poblacion: {planeta.population}</p>
        </div>
    )
}