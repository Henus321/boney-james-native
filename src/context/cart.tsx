import {createContext, useState, useEffect} from 'react';
import {CartItemType} from '../models';
import {drop, getCartItems} from '../utils/sqlite';

export type CartContextState = {
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

export const CartContext = createContext<CartContextState>({
  cart: [],
  setCart: () => {},
});

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    async function loadCart() {
      const storedCartItems = await getCartItems();
      setCart(storedCartItems);
    }
    loadCart();
  }, []);

  const value = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
