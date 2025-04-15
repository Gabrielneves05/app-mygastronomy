import { Dialog } from "@mui/material";
import styles from "./platePopup.module.css"; 

export default function PlatePopup({ plateData, onClose }) {
  return (
    <Dialog open={true} onClose={onClose}>
      <div className={styles.popupContainer}>
        <img src={plateData.imgUrl} alt="" />
        <div className={styles.popupContent}>
          <h2>{plateData.name}</h2>
          <p className={styles.ingredients}>{String(plateData.ingredients).replace(/,/g, ", ")}</p>
          <p>{plateData.description}</p>
          <h2>R$ {plateData.price}</h2>
          <button>Adicione ao carrinho</button>
        </div>
      </div>
    </Dialog>
  )
}