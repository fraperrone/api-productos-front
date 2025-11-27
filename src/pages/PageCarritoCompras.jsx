// pagina de carrito de compras

import React from 'react'

// importamos useState
import { useState } from 'react';
import { useEffect } from 'react';

import Carrito from '../components/Carrito';

export default function PageCarritoCompras() {
  
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //fetch a api
        fetch('http://localhost:8080/api/productos')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProductos(data)
            }
            )
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <Carrito  productos={productos} setProductos={setProductos}/>
        </div>
    );
}   