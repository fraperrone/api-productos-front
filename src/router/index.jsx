import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import DetalleProducto from "../pages/DetalleProducto";
import AgregarProducto from "../pages/AgregarProducto";

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
    ],
  },
]);

export default router;
