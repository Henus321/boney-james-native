import {Pressable, StyleSheet, View} from 'react-native';
import {useContext} from 'react';
import {CartContext} from '../context/cart';
import {deleteCartItem} from '../utils/sqlite';
import {CartItemType} from '../models';

import AppText from '../components/Shared/AppText';

function CartScreen() {
  const {cart, setCart} = useContext(CartContext);

  const handleDelete = (cartItem: CartItemType) => {
    deleteCartItem(cartItem)
      .then(() =>
        setCart(prev => [...prev.filter(item => item.id !== cartItem.id)]),
      )
      .catch(() => console.log('Cant delete cart item!'));
  };

  return (
    <View>
      {cart &&
        !!cart.length &&
        cart.map(cartItem => (
          <Pressable
            style={styles.cartItem}
            key={cartItem.id}
            onPress={() => handleDelete(cartItem)}>
            <AppText>
              {cartItem.id} - {cartItem.quantity}
            </AppText>
          </Pressable>
        ))}
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    margin: 10,
    backgroundColor: 'olivedrab',
  },
});
