"use client"
import { useState } from "react";
import "./page.css";
import ContainerBackHome from "@/app/components/ContainerBackHome";
import { useLista } from "@/context/ListaContext";
import { useRouter } from "next/navigation";

const Home = () =>{
const router = useRouter();
const { lista } = useLista();
const [modal, setModal] = useState<boolean>(false)
  return (
    <div >
      <h1>Nuestra Paginita</h1>

     {lista.map((e) => (
        <p key={e}>{e}</p>
      ))}
      <button onClick={(()=> {
        
      })}>Comprar</button>
      <button onClick={(()=> {
        setModal(true)
      })}>Volver Atras</button>
      {modal && <ContainerBackHome modal={modal} setModal={setModal}>
        <p>Hola</p>
      </ContainerBackHome>}
    </div>
  );
}

export default Home;
