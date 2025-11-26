import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import DetalleProducto from "../pages/DetalleProducto";
import AgregarProducto from "../pages/AgregarProducto";
import UsuarioPedidos from "../pages/UsuarioPedidos";
import Login from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> }, // login siempre accesible
  {
    path: "/",
    element: <ProtectedRoute element={<MainLayout />} />, // protegido
    children: [
      { path: "/", element: <Home /> },
      { path: "/productos", element: <Productos /> },
      { path: "/productos/:id", element: <DetalleProducto /> },
      { path: "/agregar-producto", element: <AgregarProducto /> },
      { path: "/usuario-pedidos", element: <UsuarioPedidos /> },
    ],
  },
]);

export default router;