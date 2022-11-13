import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Transfer, OTP} from '../../screens';

const TransferStack = createNativeStackNavigator();
const TransferNavigator = () => {
  return (
    <>
      <TransferStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Transfer">
        <TransferStack.Screen name="Transfer" component={Transfer} />
        <TransferStack.Screen name="OTP" component={OTP} />
      </TransferStack.Navigator>
    </>
  );
};

export default TransferNavigator;
