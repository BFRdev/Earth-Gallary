import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Page1 from "./screens/pg1";
import Page2 from "./screens/pg2";
import Page3 from "./screens/pg3";

var myPages = TabNavigator({
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
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={24} />
      )
    }
  }

},
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'green',
    }
  });

export default myPages; 
