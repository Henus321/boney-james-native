import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {initSqlite} from './src/utils/sqlite';

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
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <AppStack />
    </GestureHandlerRootView>
  );
}

export default App;
