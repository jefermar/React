import { useState } from "react";

const   Contador = ()=>{
    const [contador, setContador] =  useState(0);
    return(
        <div>
            <h1><title>contador en aumento: {contador}</title></h1>
            <button onClick={()=>{setContador(contador+1)}}>aumentar puntos</button>
            <button onClick={()=>{setContador(contador-1)}}>quitar puntos</button>
        </div>
        )
}

export default Contador;