// generamos navbar
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const Navbar = () => {
  const { login } = useAuth()
  return (
    <nav style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
      <h1>Mi Aplicación React</h1>
      {/* menu desplegable */}
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/productos"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Productos
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link
            to="/usuario-pedidos"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Mis Pedidos
          </Link>
        </li>

        <li>
          <Link to={'/carrito-compras'}
            style={{ color: 'white', textDecoration: 'none' }}  
          >Ver carrito de compras</Link>
        </li>

        {/* tablero de administrador */}
        <li>/</li>

        <li>
          <Link
            to="/administrar-productos"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Gestionar Productos
          </Link>
        </li>

        {/* <li>Administracion usuarios</li> */}

        {/* boton Cerrar sesion */}
        <li>/</li>
        <Link
          to="/login"
          style={{ color: 'white', textDecoration: 'none' }}
          onClick={() => setLogin(null)}
        >
          <li>Salir</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
