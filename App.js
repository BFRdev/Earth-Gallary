import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

//import pages 
import Page1 from "./screens/pg1";
import Page2 from "./screens/pg2";
import Page3 from "./screens/pg3";

//declare pages to tab bar 
const myPages = createBottomTabNavigator({

  Home: {
    screen: Page1,
    tabBarOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={24} />
      )
    }
  },
  About: {
    screen: Page2,
    tabBarOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={24} />
      )
    }
  },
  Chat: {
    screen: Page3,
    tabBarOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={24} />
      )
    }
  }

},
  { //tab bar style 
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
    activeTintColor: 'blue',
    }
  });

export default myPages; 
