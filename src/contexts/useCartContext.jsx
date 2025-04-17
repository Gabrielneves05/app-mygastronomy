import { createContext, useContext, useState } from 'react';
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = itemToAdd => {
    const checkItemAlready = cartItems.find(cartItem => {
      return cartItem._id === itemToAdd._id;
    })

    if(!checkItemAlready) {
      itemToAdd.quantity = 1;
      setCartItems([...cartItems, itemToAdd]);
      toast.success("Item adicionado ao carrinho!");
    } else {
      toast.error("Item já existe no carrinho!");
    }

    console.log(cartItems);
  }

  const removeFromCart = itemId => {
    const cartItemsRemoved = cartItems.filter(item => {
      return item._id !== itemId;
    })

    setCartItems(cartItemsRemoved);
  }

  const updateCartItems = items => {
    setCartItems(items);
  }

  return (
    <CartContext.Provider value={{ removeFromCart, addToCart, cartItems, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);

  if(!context) {
    console.log('You are out of CartContext');
  }

  return context;
}