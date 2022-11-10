import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Benefeciaries, Home, Transfer, ATMs} from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeFocused, HomeUnFocused} from '../../assets/images';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarItemStyle: {
            marginHorizontal: 5,
            marginVertical: 3,
            borderRadius: 16,
          },
          tabBarStyle: {
            backgroundColor: 'rgba(21, 26, 33, 1)',
            height: 60,

            borderTopColor: 'transparent',
          },
          tabBarInactiveBackgroundColor: 'rgba(32, 41, 51, 1)',
          tabBarActiveBackgroundColor: 'rgba(0, 114, 54, 1)',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(183, 183, 183, 1)',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Transfer" component={Transfer} />
        <Tab.Screen name="Benefeciaries" component={Benefeciaries} />
        <Tab.Screen name="alka" component={Benefeciaries} />
        <Tab.Screen name="sjskl" component={Benefeciaries} />
      </Tab.Navigator>
    </>
  );
};

export default TabNav;
