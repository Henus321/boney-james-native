import {Pressable, StyleSheet, View} from 'react-native';
import {useContext} from 'react';
import {CartContext} from '../context/cart';

import AppText from '../components/Shared/AppText';

function CartScreen() {
  const {cart} = useContext(CartContext);
  return (
    <View>
      {cart &&
        !!cart.length &&
        cart.map(item => (
          <Pressable
            style={styles.item}
            key={item.id}
            onPress={() => console.log(item.id)}>
            <AppText>
              {item.id} - {item.quantity}
            </AppText>
          </Pressable>
        ))}
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin: 10,
    backgroundColor: 'olivedrab',
  },
});
