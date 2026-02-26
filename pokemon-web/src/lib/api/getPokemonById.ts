import { Pokemon } from "@/types"
import { api } from "./api"




export const getCharacterById = async(id: number) =>{
    const respuesta = await api.get<Pokemon>(`/pokemon-form/${id}`);
    return respuesta;
}