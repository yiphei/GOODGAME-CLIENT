// import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from '../components/welcome';
import Introduction from '../components/introduction';
import Login from '../components/login';
import SignUp from '../components/signup';
import GameView from '../components/gameView';
import CreateGame from '../components/createGame';
import MainTabBar from './main-tab-bar';
import ChooseLocation from '../components/chooseLocation';

const Main = createStackNavigator(
  {
    Welcome,
    Introduction,
    Login,
    SignUp,
    MainTabBar,
    GameView,
    ChooseLocation,
  },
  {
    initialRouteName: 'Login',
  },
);

export default Main;
