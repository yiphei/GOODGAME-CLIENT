import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Home from '../components/home';
import CreateGame from '../components/createGame';
import Profile from '../components/profile';
import Ranking from '../components/ranking';
import Map from '../components/map';
import MyProfile from '../components/Profile4';
// import Evaluation from '../components/chatbot';
import CreateCourt from '../components/createCourt';
import PostEvaList from '../components/postEvaList';
import YourGames from '../components/your-game';


const MainTabBar = createBottomTabNavigator(
  {
    // Home: {
    //   screen: Home,
    //   navigationOptions: ({ navigation }) => ({
    //     tabBarLabel: 'Home',
    //     tabBarIcon: ({ focused }) => (
    //       <Ionicons
    //         name="home"
    //         size={26}
    //         color={focused ? '#58AADA' : 'grey'}
    //       />
    //     ),
    //   }),
    // },
    Map: {
      screen: Map,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Map',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="compass"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
    CreateGame: {
      screen: CreateGame,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'CreateGame',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="plus-circle"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
    // YourGames,
    // CreateCourt,
    MyProfile: {
      screen: MyProfile,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'My Profile',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="user"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
    // Evaluation,
    PostEvaList: {
      screen: PostEvaList,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'PostEval',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="comments"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Map',
  },
);

// <ion-icon name="basketball"></ion-icon>
export default MainTabBar;
