import { useState } from "react";

export default function PageDetalleProducto() {
  const [id, setId] = useState("");
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/productos/${id}`);
      const data = await response.json();

      if (!response.ok) {
        console.log(data)
        throw new Error("Error al obtener el producto: " + data.message);
      }
      setProducto(data);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("No se encontró el producto con ese ID.");
    }
  };

  return (
    <div>
      <h2>Buscar producto por ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Ingrese ID del producto"
        />
        <button type="submit">Buscar</button>
      </form>

      {producto && (
        <div style={{ marginTop: "20px" }}>
          <h3>{producto.nombre}</h3>
          <p>Precio: {producto.precio}</p>
          <p>Stock: {producto.stock}</p>
          <p>Descripción: {producto.descripcion}</p>
        </div>
      )}
      {/* mostramos error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
}