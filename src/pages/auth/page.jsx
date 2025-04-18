import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./page.module.css";
import { toast } from "react-toastify";
import AuthServices from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

export default function Auth() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState(null);
  const { login, signup, authLoading } = AuthServices();
  const navigate = useNavigate();

  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if(authData) {
      navigate("/profile");
    }
  }, [authData]);

  const handleChangeFormType = () => {
    setFormData(null);

    if(formType === "login") {
      setFormType("signup");
    } else {
      setFormType("login");
    }
  }

  const handleFormDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    
    switch (formType) {
      case "login":
          login(formData);
        break;
      case "signup":
          if(formData.password !== formData.confirmPassword) {
            toast.error("As senhas não coincidem!");
            return;
          }
          signup(formData);
        break;
    }
  }

  if(authLoading) {
    return (
      <h1>Carregando...</h1>
    )
  }

  return (
    <div className={styles.authPageContainer}>
        {formType === "login" ? (
          <>
            <h1>Entre com sua conta</h1>
            <form onSubmit={handleSubmitForm}>
              <TextField 
                required
                label="Email"
                type="email"
                name="email"
                onChange={handleFormDataChange}
              />

              <TextField 
                required
                label="Senha"
                type="password"
                name="password"
                onChange={handleFormDataChange}
              />

              <button type="submit">Iniciar sessão <LuLogIn/></button>
            </form>
            <Button onClick={handleChangeFormType} className={styles.registerBtn}>Não possui uma conta? Cadastre-se!</Button>
          </>
        ) : null}

        {formType === "signup" ? (
          <>
            <h1>Crie sua conta</h1>
            <form onSubmit={handleSubmitForm}>
              <TextField 
                required
                label="Nome Completo"
                type="name"
                name="name"
                onChange={handleFormDataChange}
              />

              <TextField 
                required
                label="Email"
                type="email"
                name="email"
                onChange={handleFormDataChange}
              />

              <TextField 
                required
                label="Senha"
                type="password"
                name="password"
                onChange={handleFormDataChange}
              />

              <TextField 
                required
                label="Confirme sua senha"
                type="password"
                name="confirmPassword"
                onChange={handleFormDataChange}
              />

              <button type="submit">Registrar-se <LuLogIn/></button>
            </form>
            <Button onClick={handleChangeFormType} className={styles.registerBtn}>Já possui uma conta? Entre aqui!</Button>
          </>
        ) : null}
    </div>
  )
}