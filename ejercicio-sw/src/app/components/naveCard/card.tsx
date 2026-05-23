import { Nave, Planeta } from "@/types"
import "./page.css"


export const CartaNave = ({nave}: {nave:Nave}) =>{
    return(
        <div className="principalNave">
            <h1>{nave.name}</h1>
            <p>Coste: {nave.cost_in_credits}</p>
            <p>Modelo: {nave.model}</p>
            <p>Valoracion Hyperespacio: {nave.hyperdrive_rating}</p>
        </div>
    )
}