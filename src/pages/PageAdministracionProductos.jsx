// genemos la pagina para administrar productos con su menu
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PageAdministracionProductos = () => {
  // genermoas menu de seleccion para adminstracion de prpoductos
  return (
    <div>
      <h1>Administración de Productos</h1>
      <p>Desde esta página puedes administrar los productos.</p>
      <ul>
        <Link to={'/administrar-productos/agregar-producto'}>
          <li>Agregar Producto</li>
        </Link>
        <Link to={'/administrar-productos/listado-productos'}>
          <li>Listar Producto</li>
        </Link>
        <Link to={'/administrar-productos/detalle-productos'}>
          <li>Buscar Producto por Id</li>
        </Link>
        <Link to={'/administrar-productos/actualizar-producto'}>
          <li>Actualizar Producto</li>
        </Link>
        <Link to={'/administrar-productos/eliminar-producto'}>
          <li>Eliminar Producto</li>
        </Link>
        <Link to={'/'}>
          {' '}
          <li>Volver al Menu Principal</li>{' '}
        </Link>
      </ul>
      <Outlet />
    </div>
  )
}

export default PageAdministracionProductos
