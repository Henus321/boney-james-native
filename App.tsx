import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {drop, initSqlite} from './src/utils/sqlite';
import {CartProvider} from './src/context/cart';

import AppStack from './src/routes/AppStack';

function App() {
  useEffect(() => {
    initSqlite()
      .then(() => {
        //setDbInitialized(true);
      })
      .catch(err => {
        // need to handle error
        console.log(err);
      });
    //drop();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CartProvider>
        <StatusBar barStyle="dark-content" />
        <AppStack />
      </CartProvider>
    </GestureHandlerRootView>
  );
}

export default App;
