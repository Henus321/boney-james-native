import {View} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {CartItemType} from '../models';
import {createTable, getCartItems, getDBConnection} from '../utils/sqlite';

import AppText from '../components/Shared/AppText';

function CartScreen() {
  const [cartInitialized, setCartInitialized] = useState(false);
  const [cart, setCart] = useState<CartItemType[]>();

  const loadSqliteCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      const storedCartItems = await getCartItems(db);
      if (storedCartItems.length) setCart(storedCartItems);
    } catch (error) {
      // handle error
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadSqliteCallback()
      .then(() => setCartInitialized(true))
      .catch(err => console.log(err));
  }, [loadSqliteCallback]);

  if (!cartInitialized) {
    return <AppText>Cart loading...</AppText>;
  }

  return (
    <View>
      {cart && cart.map(item => <AppText key={item.slug}>{item.name}</AppText>)}
    </View>
  );
}

export default CartScreen;
