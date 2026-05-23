"use client"
import { useRouter } from "next/navigation"
import "./cabecera.css"
export const Cabecera = () =>{

    const router = useRouter();
    return(
        <div className="cabeceraPrincipal">
            <p> </p>
            <h1>STAR WARS ARCHIVE</h1>
            <button onClick={()=>router.push('/')}>HOME</button>
        </div>
    )

}
