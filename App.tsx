import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import AppStack from './src/routes/AppStack';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <AppStack />
    </GestureHandlerRootView>
  );
}

export default App;
