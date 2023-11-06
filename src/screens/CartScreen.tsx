import {View} from 'react-native';
import {useEffect, useState} from 'react';
import {CartItemType} from '../models';
import {useIsFocused} from '@react-navigation/native';
import {getCartItems} from '../utils/sqlite';

import AppText from '../components/Shared/AppText';

function CartScreen() {
  const [cart, setCart] = useState<CartItemType[]>();

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadCart() {
      const storedCartItems = await getCartItems();
      setCart(storedCartItems);
    }

    if (isFocused) loadCart();
  }, [isFocused]);

  return (
    <View>
      {cart && cart.map(item => <AppText key={item.slug}>{item.name}</AppText>)}
    </View>
  );
}

export default CartScreen;
