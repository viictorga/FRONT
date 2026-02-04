import { useState } from "react"

const Counter = ({name}: {name:string}) =>{
      const [count,setCount] = useState<number>(0)
    return (
        <div>

            <p> {count}</p>
      <button onClick={()=>setCount(count+1)}>Sumale uno {name}</button>
        </div>
    )
}
export default Counter;