"use client"
import { useState } from "react"
import "./page.css"


type Props = {
    page: number
    next: boolean,
    prev: boolean,
    setPage: (page: number )=> void
}


const Paginador = ({next,prev,page,setPage}: {
    next: boolean,
    prev: boolean,
    page: number,
    setPage: (page: number) => void
}) => {
    const [preClass, setPreClass] = useState("arrow")
    const [postClass, setpostClass] = useState("arrow")
    return(
        <div className="PaginadorContainer">
            <div className={prev ? "arrow": "arrow disabled"} onClick={()=>{
                setPage(page - 1)
            }}><p>{"<"}</p></div>
            <h1>{page}</h1>
            <div className={next ? "arrow": "arrow disabled"} onClick={()=>{
                setPage(page + 1)
            }}><p>{">"}</p></div>
        </div>
    )
}
export default Paginador;