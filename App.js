import react, { useState } from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import Routers from './src/Navigation/Routers';
import Withoutnavigation from './src/screens/Withoutnavigation';
import mainstyle from "./src/styles/style"
import { Provider } from 'react-redux';
import store from './src/Redux/store';

const App = () => {
  return (
    <><Provider store={store}>
      <StatusBar backgroundColor={mainstyle.themcolor} />
      <Routers />
      </Provider>
    </>
  );
};

export default App;
