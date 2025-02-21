import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  )
}