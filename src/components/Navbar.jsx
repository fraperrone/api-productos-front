// generamos navbar
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', background: '#282c34', color: 'white' }}>    
            <h1>Mi Aplicación React</h1>
            {/* menu desplegable */}
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
                <li>
                    <Link to="/" style={{color:'white',textDecoration:'none'}}>Inicio</Link>
                </li>
                <li>
                    <Link to="/productos" style={{color:'white',textDecoration:'none'}}>Productos</Link>
                </li>
                <li>
                    <Link to="/agregar-producto" style={{color:'white',textDecoration:'none'}}>Agregar Producto</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;