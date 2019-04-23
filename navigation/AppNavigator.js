import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from "../screens/HomeScreen";
import {CustomerDetailScreen} from '../screens/CustomerDetailScreen';

export default createAppContainer(createStackNavigator({
  Main: HomeScreen,
  CustomerDetail: CustomerDetailScreen,
}));