import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

//this library was used for gallary https://medium.com/@hamed.taheri32/react-native-image-slider-box-6f18462ab836

//import pages 
import Page1 from "./screens/pg1";
import Page2 from "./screens/pg2";
import Page3 from "./screens/pg3";

//declare pages to tab bar 
const myPages = createBottomTabNavigator({

  LAND: {
    screen: Page1,
    tabBarOptions: {
      tabBarLabel: 'Home',

    }
  },
  SEA: {
    screen: Page2,
    tabBarOptions: {
      tabBarLabel: 'About',

    }
  },
  SKY: {
    screen: Page3,
    tabBarOptions: {
      tabBarLabel: 'Chat',

    }
  }

},
  { //tab bar style 
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 20,
    },
 
    }
  });

export default myPages; 
