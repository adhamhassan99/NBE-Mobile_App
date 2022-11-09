import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Benefeciaries, Transfer, OTP} from '../../screens';
import {HomeNavigator} from '../HomeNavigator/Home.Navigation';
import AppDrawerNavigator from '../DrawerNavigator/DrawerNavigator';
import MobileNumberEntry from '../../components/MobileNumberEntry/MobileNumberEntry';
import SetPassword from '../../screens/SetPassword/SetPassword';

const LogInStack = createNativeStackNavigator();

const LogInNavigator = () => {
  return (
    <LogInStack.Navigator initialRouteName="Login">
      <LogInStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <LogInStack.Screen
        options={{headerShown: false}}
        name="SignUpMobileNumber"
        component={MobileNumberEntry}
      />
      <LogInStack.Screen
        options={{headerShown: false}}
        name="OTP"
        component={OTP}
      />
      <LogInStack.Screen
        options={{headerShown: false}}
        name="SetPassword"
        component={SetPassword}
      />
      <LogInStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </LogInStack.Navigator>
  );
};

export default LogInNavigator;
