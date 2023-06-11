import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import MainStackNavigator from './src/navigation';
import stores from './src/stores';
const {persistor, store} = stores;

function App() {
  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <MainStackNavigator />
    </Provider>
  );
}
export default App;
