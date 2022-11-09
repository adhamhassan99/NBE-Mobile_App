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
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? HomeFocused : HomeUnFocused;
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Image source={iconName} />;
          },

          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'rgba(6, 1, 1, 0.742)',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Transfer" component={Transfer} />
        <Tab.Screen name="Benefeciaries" component={Benefeciaries} />
        <Tab.Screen name="ATMs" component={ATMs} />
      </Tab.Navigator>
    </>
  );
};

export default TabNav;
