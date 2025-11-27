// generamos el pagina para actualizar producto con su IdleDeadline, form y mensajes
import { useState } from 'react'
export default function PageActualizarProducto() {
  const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [sotck, setStock] = useState('')  
    const [imagenUrl, setImagenUrl] = useState('')
    const [mensaje, setMensaje] = useState(null)
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `http://localhost:8080/api/productos/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ nombre, precio }),
                }
            )
            const data = await response.json()
            if (!response.ok) {
                throw new Error('Error al actualizar el producto: ' + data.message)
            }
            setMensaje('Producto actualizado exitosamente.')
            setError(null)
        } catch (error) {
            console.log(error)
            setError('No se pudo actualizar el producto. ' + error.message)
            setMensaje(null)
        }
    }
    return (
        <div>
            <h2>Actualizar producto por ID</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Ingrese ID del producto"
                />
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese nuevo nombre del producto"
                />
                <input
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    placeholder="Ingrese nuevo precio del producto"
                />
                <input
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    placeholder="Ingrese nueva categoria del producto"
                />
                <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Ingrese nueva descripcion del producto"
                />
                <input
                    type="number"
                    value={sotck}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="Ingrese nuevo stock del producto"
                />
                <input
                    type="text"
                    value={imagenUrl}
                    onChange={(e) => setImagenUrl(e.target.value)}
                    placeholder="Ingrese nueva URL de la imagen del producto"
                />


                <button type="submit">Actualizar</button>
            </form>
            {/* mostramos mensaje de exito */}
            {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
            {/* mostramos error */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}