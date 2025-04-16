import { useEffect, useState } from "react";
import PlatesServices from "../../services/plates";
import Loading from "../loading/page";
import PlateCard from "../../components/plateCard/plateCard";
import styles from "./page.module.css";
import PlatePopup from "../../components/platePopup/platePopup";
import { useCartContext } from "../../contexts/useCartContext";


export default function Plates() {
  const { getAvailablePlates, platesLoading, refetchPlates, platesList } = PlatesServices({});
  const [ plateSelected, setPlateSelected ] = useState(null);
  const { addToCart } = useCartContext();

  useEffect(() => {
    if(refetchPlates) {
      getAvailablePlates();
    }
  }, [refetchPlates]);

  const handlePlateSelected = (plate) => {
    setPlateSelected(plate);
  }

  const handleClosePopup = () => {
    setPlateSelected(null);
  }

  const handleAddToCart = (itemToAdd) => {
    addToCart(itemToAdd);
    handleClosePopup();
  }

  if(platesLoading) {
    return ( <Loading /> );
  }

  return (
    <>
      <div>
        {platesList.map(plate => (
          <div 
            className={styles.cardContainer}
            key={plate._id} 
            onClick={() => {handlePlateSelected(plate)}}
          >
            <PlateCard plateData={plate} />
          </div>
        ))}
      </div>

      {plateSelected && (
          <PlatePopup 
            plateData={plateSelected} 
            onClose={handleClosePopup}
            onAddToCart={handleAddToCart}
          />
      )}
    </>
  ) 
}