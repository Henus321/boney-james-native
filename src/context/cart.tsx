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
  deleteFromCart: (item: CartItemType) => void;
};

export const CartContext = createContext<CartContextState>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  deleteFromCart: () => {},
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
      updateCartItem({...repeatItem, quantity: repeatItem.quantity + 1})
        .then(() =>
          setCart(prev => [
            ...prev.map(item =>
              item.id === repeatItem.id
                ? {...repeatItem, quantity: repeatItem.quantity + 1}
                : item,
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

  const deleteFromCart = (cartItem: CartItemType) => {
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

  const value = {
    cart,
    setCart,
    addToCart,
    deleteFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
