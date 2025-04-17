import { useCartContext } from "../../contexts/useCartContext";
import styles from "./page.module.css";
import { LuCircleMinus } from "react-icons/lu";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export default function Cart() {
  const { cartItems, updateCartItems, removeFromCart } = useCartContext();

  const handleChangeItemQuantity = (mode, itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if(item._id === itemId) {
        if(mode === 'less' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else if(mode === 'more') {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item; // Retorna o item inalterado se não corresponder à condição
    });

    updateCartItems(updatedCartItems);
  }

  console.log(cartItems);

  if(!cartItems.length) {
    return (
      <div className={styles.emptyCartContainer}>
        <h1>Seu carrinho está vazio!</h1>
        <button>Veja nossas especialidades</button>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1>Seus itens:</h1>
      <section>
        <div className={styles.itemsListContainer}>
          {cartItems.map(item => (
              <div 
              className={styles.itemContainer} 
              key={item._id}
              >
                <img src={item.imgUrl} alt={item.name} />
                <div className={styles.itemContent}>
                  <h2>{item.name}</h2>
                  <p>{String(item.ingredients).replace(/,/g, ", ")}</p>
                  <p>{item.description}</p>
                  <div className={styles.portionContainer}>
                    <p>Quantidade:</p>
                    <p>{item.quantity}</p>
                    <div className={styles.portionBtns}>
                      <button onClick={() => handleChangeItemQuantity('less', item._id)}><IoMdRemove /></button>
                      <button onClick={() => handleChangeItemQuantity('more', item._id)}><IoMdAdd /></button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item._id)}><LuCircleMinus />Remover do carrinho</button>
                </div>
              </div>
          ))}
        </div>
      </section>

      <button className={styles.confirmBtn}>Finalizar compra</button>
    </div>
  ) 
}