import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../../screens';
import {LogInNavigator} from '../LogInNavigator/LogInNavigator';
import TabNav from '../TabNav/TabNav';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNav} />
      <Drawer.Screen name="Login" component={LogInNavigator} />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
