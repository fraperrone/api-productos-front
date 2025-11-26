import { useState } from "react";
import axios from "axios";

export default function Carrito({ productos, setProductos }) {
  const [carrito, setCarrito] = useState([]);
  const usuarioId = 1; // ejemplo: usuario logueado

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find(item => item.productoId === producto.id);
    if (existente) {
      setCarrito(carrito.map(item =>
        item.productoId === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCarrito([...carrito, { productoId: producto.id, cantidad: 1 }]);
    }
  };

  const handleComprar = async () => {
    try {
      const pedido = {
        usuarioId,
        itemsPedidos: carrito
      };
      console.log("Creando pedido:", pedido);

      const response = await axios.post("http://localhost:8080/api/pedidos", pedido);
      alert("Pedido creado con éxito: " + response);
      setCarrito([]); // vaciar carrito
      //hacemos refresh de la pagina
      // 🔄 volver a pedir productos actualizados
      const res = await axios.get("http://localhost:8080/api/productos");
      setProductos(res.data);
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data);
      } else {
        alert("Error inesperado");
      }
    }
  };

  return (
    <div>
      <h3>Seleccionar productos</h3>
      <ul>
        {productos.map(prod => (
          <li key={prod.id}>
            {prod.nombre} - Stock: {prod.stock}
            <button onClick={() => agregarAlCarrito(prod)}>Agregar</button>
          </li>
        ))}
      </ul>

      <h3>Carrito</h3>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            Producto ID: {item.productoId} - Cantidad: {item.cantidad}
          </li>
        ))}
      </ul>

      {carrito.length > 0 && (
        <button onClick={handleComprar}>Comprar</button>
      )}
    </div>
  );
}
