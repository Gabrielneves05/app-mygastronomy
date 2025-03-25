import { useEffect } from "react";
import PlatesServices from "../../services/plates";
import Loading from "../loading/page";

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
    <h1>Plates</h1>
  ) 
}