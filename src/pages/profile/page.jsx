import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthServices from "../../services/auth";
import orderServices from "../../services/order";

import styles from "./page.module.css";

export default function Profile() {
  const { logout } = AuthServices();
  const { getUserOrders, orderLoading, refetchOrders, ordersList } = orderServices();
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if(!authData) {
      navigate("/auth");
    } else if(refetchOrders) {
      getUserOrders(authData?.user?._id);
    }
  }, [authData, refetchOrders]);

  if(orderLoading) {
    return ( <h1>Carregando...</h1> );
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  console.log(ordersList);

  return (
    <div className={styles.pageContainer}>
      <div>
        <h1>{authData?.user?.fullname}</h1>
        <h1>{authData?.user?.email}</h1>
      </div>
      
      <button onClick={handleLogout}>Sair</button>

      {ordersList.length > 0 ? 
          <div className={styles.ordersContainer}>
            {ordersList.map(order => (
              <div key={order._id} className={styles.orderContainer}>
                {order.orderItems.map(item => (
                  <div key={item._id}>
                    <h4>{item.itemDetails[0].name}</h4>
                    <p>Quantidade: {item.quantity}</p>
                    <p>{order.pickupStatus}</p>
                    <h3>{order.pickupTime}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        :
          <div>
            Você ainda não fez nenhum pedido!
          </div>
      }
    </div>
  ) 
}