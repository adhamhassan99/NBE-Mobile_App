import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Benefeciaries, Transfer} from '../../screens';
import OTP from '../../screens/OTP/OTP';

const LogInStack = createNativeStackNavigator();

export const LogInNavigator = () => {
  return (
    <LogInStack.Navigator initialRouteName="Login">
      <LogInStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <LogInStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <LogInStack.Screen
        options={{headerShown: false}}
        name="Benefeciaries"
        component={Benefeciaries}
      />
      <LogInStack.Screen
        options={{headerShown: false}}
        name="Transfer"
        component={Transfer}
      />
      <LogInStack.Screen
        options={{headerShown: false}}
        name="OTP"
        component={OTP}
      />
    </LogInStack.Navigator>
  );
};
