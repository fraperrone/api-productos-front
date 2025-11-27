// genermaos hello world
import React, { useEffect, useState } from 'react';
import Carrito from '../components/Carrito';
const PageProductosListados = () => {

    //generamos la data
    const [productos, setProductos] = useState([]);

    //realizamos fetch a una api para obtener productos localhost:8080/api/productos
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
        <div style={{ padding: '2rem' }}>
            <h2>Productos</h2>
            <ul>
                {/* mostramos: ID, nombre, precio, categoria y stock */}
                {productos.map(producto => (
                    <li key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <p>id: {producto.id}</p>
                        <p>Categoría: {producto.categoria}</p>
                        <p>Stock: {producto.stock}</p>                        
                    </li>
                ))}
            </ul>
            {/* <h2>Carrito</h2>
            <Carrito productos={productos} setProductos={setProductos}/> */}
        </div>
    );
}
export default PageProductosListados;