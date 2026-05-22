"use client"

import "./page.css"


type Props ={
    page:number,
    next:boolean,
    prev:boolean,
    setPage:(page:number)=>void
}
export const FuncionPaginacion=({page,next,prev,setPage}:Props)=>{
return(
    <div className="general">
        <div className="izq">
           <button onClick={(()=>{
            if(prev){
                setPage(page-1)
            }
           })}> ⬅ </button>
        </div> 
        <div className="numero">
            {page}
        </div>
        <div className="der">
           <button onClick={(()=>{
            if(next){
                setPage(page+1)
            }
            
           })}> ⮕ </button>
        </div>
       
    </div>
)
}