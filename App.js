import React from 'react';
import { Provider } from 'react-redux';
import Store from './store/index';
import Navigation from './navigation/main';
import ActionTypes from './actions/index';

if (!('localStorage' in window)) {
  window.localStorage = {
    _data: {},
    setItem(id, val) { return this._data[id] = String(val); },
    getItem(id) { return this._data.hasOwnProperty(id) ? this._data[id] : undefined; },
    removeItem(id) { return delete this._data[id]; },
    clear() { return this._data = {}; },
  };
}

const store = Store();

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: ActionTypes.AUTH_USER });
}

// disable really annoying in app warnings
console.disableYellowBox = true;


console.log(store);
const App = (props) => {
  return (
    <Provider store={store} >
      <Navigation />
    </Provider>
  );
};

export default App;
