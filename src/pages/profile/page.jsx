import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthServices from "../../services/auth";

export default function Profile() {
  const { logout } = AuthServices();
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if(!authData) {
      return navigate("/auth");
    }
  }, [authData]);

  const handleLogout = () => {
    logout();
    return navigate("/");
  }

  return (
    <>
      <h1>{authData?.user?.fullname}</h1>
      <h1>{authData?.user?.email}</h1>
      <button onClick={handleLogout}>Sair</button>
    </>
  ) 
}