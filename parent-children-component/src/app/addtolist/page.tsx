"use client"

import { useLista } from "@/context/ListaContext"
import { useState } from "react"



 const AddtoList = () =>{
    const [input, setInput] = useState("")
    const {addLista} = useLista();
    return(
        <div>
            <input value={input} onChange={(e)=>{
                setInput(e.target.value)
            }}
            onKeyDown={(e)=>{
                if(e.key == "Enter"){
                    addLista(input)
                    setInput("")
                }
            }}
            ></input>
        </div>
    )
}
export default AddtoList;   