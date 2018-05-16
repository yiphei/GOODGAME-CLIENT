// import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from '../components/welcome';
import Introduction from '../components/introduction';
import Login from '../components/login';
import Home from '../components/home';

const Main = createStackNavigator(
  {
    Welcome,
    Introduction,
    Login,
    Home,
  },
  {
    initialRouteName: 'Login',
  },
);

export default Main;
