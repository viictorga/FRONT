import { Character } from "@/types";
import "./page.css"

const CharacterChulo = ({character}:{character : Character}) =>{
    return(
        <div className="ContainerCharacterChulo">
            <img src={character.image}></img>
            <div className="infoContainer">
                <h1>{character.name}</h1>
                <p>{character.gender}</p>
                <p>{character.location.name}</p>

            </div>
            
        </div>
    )
}
export default CharacterChulo