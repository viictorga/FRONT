import { Episode } from "@/types";
import "./page.css"
import CharacterChulo from "../Character";
import { GetOneCharacter } from "@/api/getOneCharacter";

const EpisodeChulo = ({episode}:{episode : Episode}) =>{
    
    return(
        <div className="ContainerCharacterChulo">
            <div className="infoContainer">
                <h1>{episode.name}</h1>
                <p>{episode.url}</p>
                <p>{episode.air_date}</p>
                <p>{episode.episode}</p>
                <p>Los personajes son estos: {episode.characters.map((e)=>{
                   


                    return (<CharacterChulo key={e} props={{link:e}}></CharacterChulo>)
                })}</p>

            </div>
            
        </div>
    )
}
export default EpisodeChulo