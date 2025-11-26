// genermaos una pagina que muestra los pedidos de un usuario en la direccion: /api/usuarios/{usuarioId}/pedidos
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsuarioPedidos = () => {
  const [pedidos, setPedidos] = useState([]); // inicializamos como array
  const usuarioId = 1;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/usuarios/${usuarioId}/pedidos`)
      .then(response => {
        console.log("Pedidos recibidos:", response.data);
        setPedidos(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error('Error fetching user orders:', error));
  }, [usuarioId]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Pedidos del Usuario {usuarioId}</h2>
      <ul>
        {Array.isArray(pedidos) && pedidos.map(pedido => (
          <li key={pedido.id}>
            <h3>Pedido ID: {pedido.id}</h3>
            <p>Estado: {pedido.estado}</p>
            <p>Fecha: {new Date(pedido.fecha).toLocaleDateString()}</p>
            <h4>Items:</h4>
            <ul>
                {pedido.productos.map(item => (
                    <li key={item.productoId}>
                        Producto ID: {item.productoId}, Cantidad: {item.cantidad}, Nombre Producto: {item.nombreProducto}
                    </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuarioPedidos;

