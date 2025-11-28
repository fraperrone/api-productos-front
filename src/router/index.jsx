import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import PageHome from '../pages/PageHome'
import PageProductosListados from '../pages/PageProductosListados'
import DetalleProducto from '../pages/PageDetalleProducto'
import PageAgregarProducto from '../pages/PageAgregarProducto'
import PageUsuarioPedidos from '../pages/PageUsuarioPedidos'
import PageLogin from '../pages/PageLogin'
import ProtectedRoute from '../components/ProtectedRoute'
import PageAdministracionProductos from '../pages/PageAdministracionProductos'
import PageDetalleProducto from '../pages/PageDetalleProducto'
import PageEliminarProducto from '../pages/PageEliminarProducto'
import PageActualizarProducto from '../pages/PageActualizarProducto'
import PageCarritoCompras from '../pages/PageCarritoCompras'

const router = createBrowserRouter([
  { path: '/login', element: <PageLogin /> }, // login siempre accesible
  {
    path: '/',
    element: <ProtectedRoute element={<MainLayout />} />, // protegido
    children: [
      { path: '/', element: <PageHome /> },
      { path: '/productos', element: <PageProductosListados /> },
      { path: '/productos/:id', element: <PageDetalleProducto /> },

      {
        path: '/usuario-pedidos',
        element: (
          <ProtectedRoute roles={['CLIENTE']} element={<PageUsuarioPedidos />} />
        ),
      },

      {
        path: '/carrito-compras',
        element: (
          <ProtectedRoute roles={['CLIENTE']} element={<PageCarritoCompras />} />
        ),
      },

     
      // direcciones de adminstracion de productos
      {
        path: '/administrar-productos',
        element: (
          <ProtectedRoute
            element={<PageAdministracionProductos />}
            roles={['ADMIN']}
          />
        ),

        children: [
          {
            path: 'agregar-producto',
            element: <ProtectedRoute element={<PageAgregarProducto />} />,
          },
          {
            path: 'listado-productos',
            element: <ProtectedRoute element={<PageProductosListados />} />,
          },
          {
            path: 'detalle-productos',
            element: <ProtectedRoute element={<PageDetalleProducto />} />,
          },
          {
            path: 'eliminar-producto',
            element: <ProtectedRoute element={<PageEliminarProducto />} />,
          },
          {
            path: 'actualizar-producto',
            element: <ProtectedRoute element={<PageActualizarProducto />} />,
          },
        ],
      },
    ],
  },
])

export default router
