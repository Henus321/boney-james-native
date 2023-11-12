import {createContext, useState, useEffect} from 'react';
import {CartItemType} from '../models';
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from '../utils/sqlite';
import {getCartItemId} from '../utils/helpers';

export type CartContextState = {
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  addToCart: (item: CartItemType) => void;
  deleteItemFromCart: (item: CartItemType) => void;
  reduceItemFromCart: (item: CartItemType) => void;
};

export const CartContext = createContext<CartContextState>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  deleteItemFromCart: () => {},
  reduceItemFromCart: () => {},
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

  const addToCart = (cartItem: CartItemType) => {
    const newCartItemId = getCartItemId(cartItem);

    const repeatItem = cart.find(item => item.id === newCartItemId);
    if (!!repeatItem) {
      const updatedItem = {...repeatItem, quantity: repeatItem.quantity + 1};
      updateCartItem(updatedItem)
        .then(() =>
          setCart(prev => [
            ...prev.map(item =>
              item.id === repeatItem.id ? updatedItem : item,
            ),
          ]),
        )
        .catch(() => console.log('Cant update cart!'));
    } else {
      const newCartItem: CartItemType = {
        ...cartItem,
        id: newCartItemId,
      };
      addCartItem(newCartItem)
        .then(() => setCart(prev => [...prev, newCartItem]))
        .catch(() => console.log('Cant add to cart!'));
    }
  };

  const deleteItemFromCart = (cartItem: CartItemType) => {
    if (!cartItem.id) {
      console.log('Error! Cant find coat id');
      return;
    }
    deleteCartItem(cartItem)
      .then(() =>
        setCart(prev => [...prev.filter(item => item.id !== cartItem.id)]),
      )
      .catch(() => console.log('Cant delete cart item!'));
  };

  const reduceItemFromCart = (cartItem: CartItemType) => {
    if (!cartItem.id) {
      console.log('Error! Cant find coat id');
      return;
    }

    const isLast = cartItem.quantity < 2;
    if (isLast) {
      deleteCartItem(cartItem)
        .then(() =>
          setCart(prev => [...prev.filter(item => item.id !== cartItem.id)]),
        )
        .catch(() => console.log('Cant delete cart item!'));
    } else {
      const updatedItem = {...cartItem, quantity: cartItem.quantity - 1};
      updateCartItem(updatedItem)
        .then(() =>
          setCart(prev => [
            ...prev.map(item => (item.id === cartItem.id ? updatedItem : item)),
          ]),
        )
        .catch(() => console.log('Cant update cart!'));
    }
  };

  const value = {
    cart,
    setCart,
    addToCart,
    deleteItemFromCart,
    reduceItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
