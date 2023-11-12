import {Pressable, StyleSheet} from 'react-native';
import {CartItemType} from '../../models';
import {CartContext} from '../../context/cart';
import {useContext} from 'react';

import AppText from '../Shared/AppText';

type CartCardProps = {
  cartItem: CartItemType;
};

const CartCard = ({cartItem}: CartCardProps) => {
  const {deleteFromCart} = useContext(CartContext);

  return (
    <Pressable style={styles.cartItem} onPress={() => deleteFromCart(cartItem)}>
      <AppText>
        {cartItem.id} - {cartItem.quantity}
      </AppText>
    </Pressable>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    margin: 10,
    backgroundColor: 'olivedrab',
  },
});
