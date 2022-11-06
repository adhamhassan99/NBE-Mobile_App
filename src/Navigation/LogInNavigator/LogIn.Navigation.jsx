import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Benefeciaries, Transfer} from '../../screens';

const LogInStack = createNativeStackNavigator();

export const LogInNavigator = () => {
  return (
    <LogInStack.Navigator>
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
    </LogInStack.Navigator>
  );
};
