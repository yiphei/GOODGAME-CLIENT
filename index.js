import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Store from './store/index';
import Home from './components/home';

const store = Store();

console.log(store);

const ReduxApp = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

AppRegistry.registerComponent('goodGame', () => ReduxApp);
