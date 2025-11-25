import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </div>
  );
}
