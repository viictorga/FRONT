import { useState } from 'react'
import './App.css'

const App = () => {

  let [textoOperacion,graficar] = useState<String>("")
  let [numero1, setNum1] = useState<string | null>(null);
  let [numero2, setNum2] = useState<string | null>(null);
  let [operacion, setOperacion] = useState<string | null>(null);
  let [resultado, setResultado] = useState(false);


 
  /*

  estaddo operacion apra mostrar [textoOperacion, set]
  otro estado para num1 [num1, setNum1]
  otro estado para num2, lo mismo que num1
  */
const resetCalc = () =>{
  
    setNum1(null);
   setNum2(null);
   setOperacion(null);
    graficar("");
    setResultado(false);
    
  
}

const handleClick = (miString: string) => {

  if (resultado) {
    setNum1(miString);
    setNum2(null);
    setOperacion(null);
    graficar(miString);
    setResultado(false);
    return;
  }
 

  else if (!numero1 && miString !== "+" && miString !== "-" && miString !== "*" && miString !== "/" && miString !== "=") {
    setNum1(miString);
    graficar(miString);
  }
  else if (!operacion && (miString === "+" || miString === "-" || miString === "*" || miString === "/")) {
    setOperacion(miString);
    graficar(textoOperacion + miString);
  }
  else if (!numero2 && miString !== "+" && miString !== "-" && miString !== "*" && miString !== "/" && miString !== "=") {
    setNum2(miString);
    graficar(textoOperacion + miString);
  }
};

const handleIgual = (miIgual: string) =>{
  if(miIgual === "="){
    if(numero1 && operacion && numero2){
      const numero11 = Number(numero1)
      const numero22 = Number(numero2)
      if(operacion === "+"){
        graficar(String(numero11+numero22))
        setResultado(true);
      }
      if(operacion === "-"){
        graficar(String(numero11-numero22))
        setResultado(true);
      }
      if(operacion === "*"){
        graficar(String(numero11*numero22))
        setResultado(true);
      }
      if(operacion === "/"){
        graficar(String(numero11/numero22))
        setResultado(true);
      }
    }
  }
}

  return (
    <div className="divPrincipal"> 
      <div className='Visor'> 
        <h1> {textoOperacion}</h1>
      
      </div> 
      {/* este es el visor */}
      <div> 
        <div className= "fila-principal"> 
            <div className='numeros'>
              <div className = "cadafila">
                <button onClick={() =>{
              handleClick("1");
            }}> 1</button>
            <button onClick={() =>{
              handleClick("2");
            }}> 2</button>
            <button onClick={() =>{
              handleClick("3");
            }}> 3</button>
              </div>
             <div className = "cadafila">
                <button onClick={() =>{
              handleClick("4");
            }}> 4</button>
            <button onClick={() =>{
              handleClick("5");
            }}> 5</button>
            <button onClick={() =>{
              handleClick("6");
            }}> 6</button>
              </div>
            <div className = "cadafila">
            <button onClick={() =>{
              handleClick("7");
            }}> 7</button>
            <button onClick={() =>{
              handleClick("8");
            }}> 8</button>
            <button onClick={() =>{
              handleClick("9");
            }}> 9</button>
            </div>
            
           
            </div> 
            {/* todos los numeros */}
            <div className="operaciones">
            <button onClick={() =>{
              handleClick("+");
            }}> +</button>
            <button onClick={() =>{
              handleClick("-");
            }}> -</button>
            <button onClick={() =>{
              handleClick("*");
            }}> *</button>
            <button onClick={() =>{
              handleClick("/");
            }}> /</button>
            
            
            </div> 
            {/* operaciones */}


        </div> 
        {/* estos son los numeros del 1-9 y operaciones */}
        <div className="igualycero">
            <button onClick={() =>{
              resetCalc();
            }}> RESET</button>
            <button onClick={() =>{
              handleClick("0");
            }}> 0</button><button className = "igual"onClick={() =>{
              handleIgual("=");
            }}> =</button>

        </div> 
        {/* esto es el boton 0 e igual */}
      </div> 
      {/* esto es toda la calcu */}



    
 
    
    </div>
  )
}

export default App
