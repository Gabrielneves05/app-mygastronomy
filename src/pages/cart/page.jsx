import { useCartContext } from "../../contexts/useCartContext";
import styles from "./page.module.css";
import { LuCircleMinus } from "react-icons/lu";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export default function Cart() {
  const { cartItems } = useCartContext();

  console.log(cartItems);

  if(!cartItems.length) {
    return (
      <div>
        <h1>Seu carrinho está vazio!</h1>
        <button>Veja nossas especialidades</button>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1>Seus items:</h1>
      <section>
        <div className={styles.itemsListContainer}>
          {cartItems.map(item => (
              <div 
              className={styles.itemContainer} 
              key={item._id}
              >
                <img src={item.imgUrl} alt="" />
                <div className={styles.itemContent}>
                  <h2>{item.name}</h2>
                  <p>{String(item.ingredients).replace(/,/g, ", ")}</p>
                  <p>{item.description}</p>
                  <div className={styles.portionContainer}>
                    <p>Quantidade:</p>
                    <p>{item.quantity}</p>
                    <div className={styles.portionBtns}>
                      <button><IoMdRemove /></button>
                      <button><IoMdAdd /></button>
                    </div>
                  </div>
                  <button><LuCircleMinus />Remover do carrinho</button>
                </div>
              </div>
          ))}
        </div>
      </section>

      <button className={styles.confirmBtn}>Finalizar compra</button>
    </div>
  ) 
}