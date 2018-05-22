import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Home from '../components/home';
import CreateGame from '../components/createGame';
import Profile from '../components/profile';
import Ranking from '../components/ranking';
import HomeTab from '../components/home-tab';
import Map from '../components/map';

const MainTabBar = createBottomTabNavigator(
  {
    HomeTab,
    CreateGame,
    Ranking,
    Profile,
    Map,
  },
  {
    initialRouteName: 'HomeTab',
  },
);


export default MainTabBar;
