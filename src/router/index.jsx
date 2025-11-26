import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import DetalleProducto from "../pages/DetalleProducto";
import AgregarProducto from "../pages/AgregarProducto";
import UsuarioPedidos from "../pages/UsuarioPedidos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout con Navbar y Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/productos", element: <Productos /> },
      { path: "/productos/:id", element: <DetalleProducto /> },
      //generamos ruta para agregar producto
      { path: "/agregar-producto", element: <AgregarProducto /> },
      //ruta para ver los pedidos de un usuario
      { path: "/usuario-pedidos", element: <UsuarioPedidos /> },
    ],
  },
]);

export default router;
