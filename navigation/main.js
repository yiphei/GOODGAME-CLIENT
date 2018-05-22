// import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from '../components/welcome';
import Introduction from '../components/introduction';
import Login from '../components/login';
import SignUp from '../components/signup';
import Home from '../components/home';
import CreateGame from '../components/createGame';
import MainTabBar from './main-tab-bar';


const Main = createStackNavigator(
  {
    Welcome,
    Introduction,
    Login,
    SignUp,
    MainTabBar,
  },
  {
    initialRouteName: 'MainTabBar',
  },
);

export default Main;
