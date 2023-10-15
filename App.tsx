import {StatusBar} from 'react-native';

import AppStack from './src/routes/AppStack';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppStack />
    </>
  );
}

export default App;
