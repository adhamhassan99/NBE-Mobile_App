import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';
import AppDrawerNavigator from '../DrawerNavigator/DrawerNavigator';
const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Homepage"
        component={AppDrawerNavigator}
      />
    </HomeStack.Navigator>
  );
};
