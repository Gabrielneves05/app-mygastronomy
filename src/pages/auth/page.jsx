import { use, useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./page.module.css";
import { toast } from "react-toastify";
import AuthServices from "../../services/auth";

export default function Auth() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState(null);
  const { login, signup, authLoading } = AuthServices();

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

  if(formType === "login") {
    return (
      <div className={styles.authPageContainer}>
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

          <Button type="submit">Iniciar sessão</Button>
        </form>
        <button onClick={handleChangeFormType}>Não possui uma conta? Cadastre-se!</button>
      </div>
    ) 
  }

  if(formType === "signup") {
    return (
      <div className={styles.authPageContainer}>
        <h1>Crie sua conta</h1>
        <form onSubmit={handleSubmitForm}>
          <TextField 
            required
            label="Nome Completo"
            type="fullname"
            name="fullname"
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

          <Button type="submit">Registrar-se</Button>
        </form>
        <button onClick={handleChangeFormType}>Já possui uma conta? Entre aqui!</button>
      </div>
    )
  }
}