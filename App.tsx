import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {createTable, getCartItems, getDBConnection} from './src/utils/sqlite';
import {CartItemType} from './src/models';

import AppStack from './src/routes/AppStack';

function App() {
  //const [dbInitialized, setDbInitialized] = useState();
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
    loadSqliteCallback();
  }, [loadSqliteCallback]);

  //if (!dbInitialized) {
  //    return <AppLoading />;
  //}

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <AppStack />
    </GestureHandlerRootView>
  );
}

export default App;
