// gneramos pagina para eliminar producto
import { useState } from 'react'
export default function PageEliminarProducto() {
  const [id, setId] = useState('')
  const [mensaje, setMensaje] = useState(null)
  const [error, setError] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:8080/api/productos/${id}`,
        {
          method: 'DELETE',
        }
      )
      console.log(response)
      const data = await response.json()

      if (!response.ok) {
        throw new Error('Error al eliminar el producto: ' + data.message)
      }
      setMensaje('Producto eliminado exitosamente.')
      setError(null)
    } catch (error) {
      console.log(error)
      setError('No se pudo eliminar el producto. ' + error.message)
      setMensaje(null)
    }
  }
  return (
    <div>
      <h2>Eliminar producto por ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Ingrese ID del producto"
        />
        <button type="submit">Eliminar</button>
      </form>
      {/* mostramos mensaje de exito */}
      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
      {/* mostramos error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
