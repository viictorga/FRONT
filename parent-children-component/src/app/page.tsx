"use client"
import { useState } from "react";
import "./page.css";
import ContainerBackHome from "@/app/components/ContainerBackHome";

const Home = () =>{
const [modal, setModal] = useState<boolean>(false)
  return (
    <div >
      <h1>Nuestra Paginita</h1>
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
