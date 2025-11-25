// genermaos formulario para agregar productos
import React, { useState } from 'react';

const FormAgregarProducto = () => {
    //ya cargado un producto, para agregar rapido

    const [nombre, setNombre] = useState("Laptop Gamer");
    const [precio, setPrecio] = useState("1500");
    const [categoria, setCategoria] = useState("Electrónica");
    const [stock, setStock] = useState("10");

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoProducto = { nombre, precio, categoria, stock };
        // Enviar el nuevo producto a la API
        fetch('http://localhost:8080/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Producto agregado:', data);
                // Limpiar el formulario
                setNombre('');
                setPrecio('');
                setCategoria('');
                setStock('');
            })
            .catch(error => console.error('Error al agregar producto:', error));
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
            <h2>Agregar Nuevo Producto</h2>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
            </div>
            <div>
                <label>Categoría:</label>
                <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
            </div>
            <div>
                <label>Stock:</label>
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
}
export default FormAgregarProducto;