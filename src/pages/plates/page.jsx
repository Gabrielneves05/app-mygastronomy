import { useEffect } from "react";
import PlatesServices from "../../services/plates";
import Loading from "../loading/page";
import PlateCard from "../../components/plateCard/plateCard";



export default function Plates() {
  const { getAvailablePlates, platesLoading, refetchPlates, platesList } = PlatesServices();

  useEffect(() => {
    if(refetchPlates) {
      getAvailablePlates();
    }
  }, [refetchPlates]);

  if(platesLoading) {
    return ( <Loading /> );
  }

  console.log(platesList);

  return (
    <>
      <div>
        {platesList.map(plate => (
          <PlateCard 
            plateData={plate} 
            key={plate._id}
          />
        ))}
      </div>
    </>
  ) 
}