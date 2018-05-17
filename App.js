import React from 'react';
import { Provider } from 'react-redux';
import Store from './store/index';
import Navigation from './navigation/main';


const store = Store();

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
