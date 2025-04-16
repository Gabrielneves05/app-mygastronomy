import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/footer";
import { CartProvider } from "./contexts/useCartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <ToastContainer />
        <Footer />
      </CartProvider>
    </>
  )
}