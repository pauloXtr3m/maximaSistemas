import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";

export default createAppContainer(createStackNavigator({
  Main: HomeScreen,
  CustomerDetail: LinksScreen,
}));