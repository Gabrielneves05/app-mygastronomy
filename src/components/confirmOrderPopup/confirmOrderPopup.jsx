import { Dialog, TextField } from "@mui/material";
import styles from "./confirmOrderPopup.module.css"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmOrderPopup({ open, onClose, onConfirm }) {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  const authData = JSON.parse(localStorage.getItem("auth"));

  const handleConfirm = (e) => {
    e.preventDefault();

    if(!authData?.user?._id) {
      navigate("/auth");
    } else if(!formData?.pickupTime) {
      return;
    } else {
      const orderData = {
        userId: authData?.user?._id,
        pickupTime: formData?.pickupTime,
      }

      onConfirm(orderData);
    }
  }

  const handleFormDataChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <div className={styles.popupContainer}>
        <h2>Quase lá!</h2>
        <p>Confirme o seu pedido com a data atual: <strong>{(new Date()).toLocaleDateString()}</strong></p>
        <p>A que horas você virá buscar seu pedido?</p>
        <form className={styles.formContainer}>
          <TextField 
            size="small"
            onChange={handleFormDataChange}
            required
            type="time"
            name="pickupTime"
            className={styles.timeInput}
          />
          <div className={styles.confirmBtns}>
            <button className={styles.cancelBtn} onClick={onClose}>Cancelar</button>
            <button className={styles.confirmBtn} onClick={handleConfirm} type="submit">Confirmar</button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}