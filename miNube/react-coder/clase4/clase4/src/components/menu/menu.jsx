import React from "react";
import { useState } from "react";
import './menu.css'
import { Button } from 'antd';

//consigna
//Realizar un componente como este pero en vez de cambiar un nombre vamos a tener un contador que va a arrancar en 1 y vamos a tener 2 botones uno para restar y otro 
const Menu = () => {
    // let profe = 'Luciano';
          //valor del estado / funcion que actualiza el estado = valor inicial de ese estado
    const [profe, setProfe] = useState('Luciano');

    const cambiarNombre = () => {
        //profe = nombre;
        setProfe('Rodrigo');
    }



    return (
        <div className="contendor">
            <h1>Hola desde menu</h1>
            <p>{profe}</p>
            <Button onClick={cambiarNombre}>Cambiar nombre</Button>

            
        </div>
    );
}

export default Menu;
