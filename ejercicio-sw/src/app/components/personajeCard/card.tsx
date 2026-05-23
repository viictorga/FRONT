import { Character } from "@/types";
import "./page.css"


export const CartaPersonaje = ({personaje} : {personaje: Character}) =>{
    return(
        <div className="CartaPesonaje">
            <div className="infoPersonaje">
                <h1>{personaje.name}</h1>
                <p> Fecha de nacimiento: {personaje.birth_year}</p>
                <p>Genero: {personaje.gender}</p>
                <p>Color de Pelo: {personaje.hair_color}</p>

            </div>
        </div>
    )

}