import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import UserCredentials from "../components/UserCredential";

export default function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      {/* Aquí mostramos las credenciales del usuario */}
      <UserCredentials />

      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </div>
  );
}
