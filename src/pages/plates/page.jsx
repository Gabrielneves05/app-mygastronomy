import { useEffect, useState } from "react";
import PlatesServices from "../../services/plates";
import Loading from "../loading/page";
import PlateCard from "../../components/plateCard/plateCard";
import styles from "./page.module.css";
import PlatePopup from "../../components/platePopup/platePopup";


export default function Plates() {
  const { getAvailablePlates, platesLoading, refetchPlates, platesList } = PlatesServices({});
  const [ plateSelected, setPlateSelected ] = useState(null);

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

  if(platesLoading) {
    return ( <Loading /> );
  }

  console.log(platesList);

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
          <PlatePopup plateData={plateSelected} onClose={handleClosePopup}/>
      )}
    </>
  ) 
}