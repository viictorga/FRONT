"use client";

import "./page.css";
import Link from "next/link";

const regiones = [
  { nombre: "Kanto", ruta: "Kanto", imagen: "/kanto.png" },
  { nombre: "Johto", ruta: "Johto", imagen: "/johto.png" },
  { nombre: "Hoenn", ruta: "Hoenn", imagen: "/hoenn.png" },
  { nombre: "Sinnoh", ruta: "Sinnoh", imagen: "/sinnoh.png" },
  { nombre: "Teselia", ruta: "Teselia", imagen: "/teselia.png" },
  { nombre: "Kalos", ruta: "Kalos", imagen: "/kalos.png" },
  { nombre: "Alola", ruta: "Alola", imagen: "/alola.png" },
  { nombre: "Galar", ruta: "Galar", imagen: "/galar.png" },
  { nombre: "Paldea", ruta: "Paldea", imagen: "/paldea.png" },
];

export default function App() {
  return (
    <div className="contenedorPrincipal">
      <h1>Bienvenido al archivo Pokemon</h1>
      <h2>Estas son las regiones que puedes seleccionar:</h2>

      <div className="contenedorLogosGeneraciones">
        {regiones.map((region) => (
          <div key={region.nombre} className="cardRegion">
            <Link href={`/region/${region.ruta}`}>
              <img
                className="imagenesGeneraciones"
                src={region.imagen}
                alt={region.nombre}
              />
            </Link>
            <p>{region.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}