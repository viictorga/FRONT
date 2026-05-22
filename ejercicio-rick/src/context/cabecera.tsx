"use client"
import "./cabecera.css"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"


export const Cabecera = ({children}:{children:React.ReactNode}) =>{
    const router = useRouter()
    return(
        <>

       
        <div className="miMarco">
            <p>     </p>
                <h1> RICK Y MORTY ARCHIVE</h1>
                <button onClick={()=> router.push(`/`)}> HOME </button>
        </div>
        {children}
         </>
    )
}