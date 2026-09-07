'use client';

import React, {useState} from "react";

export function Contador() {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
    setContador(contador + 1); //Actualiza el estado Exclusivo del cliente
};

return(
    <div>
        <p>Has hecho Click {contador} veces.</p>
        <button onClick={handleClick}>
            Incrementar
        </button>
    </div>

)
}