"use client";

import { useSearchParams, useRouter } from "next/navigation";
import "./page.css";
import { useEffect, useState } from "react";
import { api } from "@/api/api";
import { Character } from "@/types";

const CharacterAmpliado = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (id) {
      api.get(`/character/${id}`).then((res) => {
        setCharacter(res.data);
      });
    }
  }, [id]);

  return (
    <div className="contenedorPrincipal">
      {character ? (
        <div className="characterDetail">
          <img src={character.image}  />

          <h1>{character.name}</h1>

         <p>ID: {character.id}</p>
        <p>Estatus: {character.status}</p>
        <p>Especie: {character.species}</p>
        <p>Tipo: {character.type || "N/A"}</p>
        <p>Genero: {character.gender}</p>

        <p>Origen: {character.origin.name}</p>
        <p>Origen URL: {character.origin.url}</p>

        <p>Localizacion: {character.location.name}</p>
        <p>Localizacion URL: {character.location.url}</p>

        <p>URL: {character.url}</p>
        <p>Creado: {character.created}</p>


         

          <button onClick={() => router.back()}>Volver</button>
        </div>
      ) : (
        <h1>No se ha encontrado el personaje</h1>
      )}
    </div>
  );
};

export default CharacterAmpliado;
