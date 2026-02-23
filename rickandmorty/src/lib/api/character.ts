import { Character } from "@/types"
import { api } from "./api"




export const getCharacterById = async(id: number) =>{
    const respuesta = await api.get<Character>(`/character/${id}`);
    return respuesta;
}