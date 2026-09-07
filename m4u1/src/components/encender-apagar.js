'use client';

import React, {useState} from "react";

export function Botonluz() {
    //Inicialización del estado

const [isOn, setIsOn] = useState(true); //true >encendido

//Manejo Click

const handleToggle = () => {
    
    //operador! >negación
    
    setIsOn(!isOn); //false >apagado

};

return (
    <button onClick={handleToggle}>
        {/* Texto dinámico basado en el estado */}
        {isOn ? 'Encendido' : 'Apagado' }
        </button>
);
}