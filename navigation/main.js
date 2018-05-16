import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Welcome from '../components/welcome';
import Introduction from '../components/introduction';
import Home from '../components/home';

const Main = createStackNavigator({
  Welcome,
  Introduction,
  Home,
},
  {
    initialRouteName: 'Welcome',
});

export default Main;
