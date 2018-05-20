import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native';

import Home from '../components/home';
import GameView from '../components/gameView';


// nest stack navigator to handle two internal views
const HomeTab = createStackNavigator({
  // keys are the names of the "routes"
  Home,
  GameView,
});


export default HomeTab;
