import { useState } from "react";

export default function PlatesServices() {
  const [platesLoading, setPlatesLoading] = useState(false);
  const [refetchPlates, setRefetchPlates] = useState(true);
  const [platesList, setPlatesList] = useState({});

  const url = "http://localhost:3000/plates";

  const getAvailablePlates = (userId) => {
    setPlatesLoading(true);

    fetch(`${url}/availables`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    })
    .then(res => res.json())
    .then(result => {
      if(result.success) {
        setPlatesList(result.body);
      } else {
        console.log(result);
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setPlatesLoading(false);
      setRefetchPlates(false);
    })
  }

  return { getAvailablePlates, platesLoading, refetchPlates, platesList };
}