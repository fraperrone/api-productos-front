import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import PageProductosListados from '../pages/PageProductosListados'
import DetalleProducto from '../pages/PageDetalleProducto'
import PageAgregarProducto from '../pages/PageAgregarProducto'
import UsuarioPedidos from '../pages/UsuarioPedidos'
import Login from '../pages/LoginPage'
import ProtectedRoute from '../components/ProtectedRoute'
import PageAdministracionProductos from '../pages/PageAdministracionProductos'
import PageDetalleProducto from '../pages/PageDetalleProducto'

const router = createBrowserRouter([
  { path: '/login', element: <Login /> }, // login siempre accesible
  {
    path: '/',
    element: <ProtectedRoute element={<MainLayout />} />, // protegido
    children: [
      { path: '/', element: <Home /> },
      { path: '/productos', element: <PageProductosListados /> },
      { path: '/productos/:id', element: <DetalleProducto /> },

      { path: '/usuario-pedidos', element: <UsuarioPedidos /> },
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
            element: (
              <ProtectedRoute
                element={<PageAgregarProducto />}
                
              />
            ),
          },
          {
            path: 'listado-productos',
            element: (
              <ProtectedRoute
                element={<PageProductosListados />}                
              />
            ),
          },
          {
            path: 'detalle-productos',
            element: (
              <ProtectedRoute
                element={<PageDetalleProducto />}                
              />
            ),
          },
        ],
      },
    ],
  },
])

export default router
