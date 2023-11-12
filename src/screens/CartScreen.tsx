import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useContext} from 'react';
import {CartContext} from '../context/cart';
import {GlobalStyles} from '../constants/styles';

import CartCard from '../components/Cart/CartCard';

function CartScreen() {
  const {cart} = useContext(CartContext);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: !!cart.length ? undefined : 1}}>
      <View style={styles.container}>
        {cart && !!cart.length ? (
          cart.map(cartItem => (
            <CartCard key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartTitle}>Пусто!</Text>
            <Text>Добавьте сюда товары</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    marginVertical: 'auto',
  },
  emptyCartTitle: {
    fontSize: GlobalStyles.fonts.medium,
    marginBottom: 2,
  },
});
