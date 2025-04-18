import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthServices from "../../services/auth";
import orderServices from "../../services/order";
import { LuLogOut, LuTimer, LuCircleCheck, LuCircleAlert } from "react-icons/lu";
import { Link } from "react-router-dom";

import styles from "./page.module.css";
import Loading from "../loading/page";

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
    return ( <Loading /> );
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  console.log(ordersList);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          <h1>{authData?.user?.fullname}</h1>
          <h2>{authData?.user?.email}</h2>
        </div>
        
        <button onClick={handleLogout}>Sair <LuLogOut /></button>
      </div>


      {ordersList.length > 0 ? 
          <div className={styles.ordersContainer}>
            {ordersList.map(order => (
              <div key={order._id} className={styles.orderContainer}>
                {order.orderItems.map(item => (
                  <div key={item._id}>
                    <h4>{item.itemDetails[0].name}</h4>
                    <p>Quantidade: {item.quantity}</p>
                    {order.pickupStatus === 'pending' ? <p className={`${styles.pickupStatus} ${styles.pending}`} ><LuTimer /> {order.pickupStatus}</p> : null}
                    {order.pickupStatus === 'completed' ? <p className={`${styles.pickupStatus} ${styles.completed}`} ><LuCircleCheck /> {order.pickupStatus}</p> : null}
                    {order.pickupStatus === 'canceled' ? <p className={`${styles.pickupStatus} ${styles.canceled}`} ><LuCircleAlert /> {order.pickupStatus}</p> : null}
                    <h3>{order.pickupTime}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        :
          <div>
            Você ainda não fez nenhum pedido!
            <Link to={"/plates"} className={styles.platesLink}> Clique aqui e veja nossas especialidades!</Link>
          </div>
      }
    </div>
  ) 
}