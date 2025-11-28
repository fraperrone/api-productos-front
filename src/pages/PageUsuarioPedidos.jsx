// genermaos una pagina que muestra los pedidos de un usuario en la direccion: /api/usuarios/{usuarioId}/pedidos
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const PageUsuarioPedidos = () => {
  const [pedidos, setPedidos] = useState([]); // inicializamos como array
  const { user } = useAuth();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/usuarios/${user.id}/pedidos`)
      .then(response => {
        console.log("Pedidos recibidos:", response.data);
        setPedidos(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error('Error fetching user orders:', error));
  }, [user.id]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Pedidos del Usuario {user.id}</h2>
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

export default PageUsuarioPedidos;

