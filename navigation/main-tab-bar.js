import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Home from '../components/home';
import CreateGame from '../components/createGame';
import Profile from '../components/profile';
import Ranking from '../components/ranking';
import Map from '../components/map';
import Profile4 from '../components/Profile4';
// import Evaluation from '../components/chatbot';
import CreateCourt from '../components/createCourt';
import PostEvaList from '../components/postEvaList';

const MainTabBar = createBottomTabNavigator(
  {
    Home,
    CreateGame,
    CreateCourt,
    Profile4,
    Map,
    // Evaluation,
    PostEvaList,
  },
  {
    initialRouteName: 'Map',
  },
);


export default MainTabBar;
