import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import DetalleProducto from "../pages/DetalleProducto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout con Navbar y Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/productos", element: <Productos /> },
      { path: "/productos/:id", element: <DetalleProducto /> },
    ],
  },
]);

export default router;
