import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Benefeciaries, Home, Transfer, ATMs} from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeFocused, HomeUnFocused} from '../../assets/images';
import TransferNavigator from '../TransferNavigator/TransferNavigator';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Home: 'home',
  TransferNavigator: 'paper-plane-outline',
  Benefeciaries: 'people-outline',
  ATM: 'location-outline',
  AirPay: 'home-sharp',
};
const TabBarIcon =
  iconName =>
  ({size, color}) =>
    <Ionicons name={iconName} size={32} color={color} />;

const screenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: TabBarIcon(iconName),
    headerShown: false,
    tabBarItemStyle: {
      marginHorizontal: 5,
      marginVertical: 5,
      borderRadius: 16,
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarStyle: {
      backgroundColor: 'rgba(44, 54, 63, 1)',
      height: 80,

      borderTopColor: 'transparent',
    },
    tabBarInactiveBackgroundColor: 'rgba(255, 255, 255, 0.05)',
    tabBarActiveBackgroundColor: 'rgba(0, 114, 54, 1)',
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'rgba(183, 183, 183, 1)',
    tabBarLabelStyle: {
      fontSize: 10,
    },
  };
};

const TabNav = () => {
  return (
    <>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TransferNavigator" component={TransferNavigator} />
        <Tab.Screen name="Benefeciaries" component={Benefeciaries} />
        <Tab.Screen name="ATM" component={Benefeciaries} />
        <Tab.Screen name="AirPay" component={Benefeciaries} />
      </Tab.Navigator>
    </>
  );
};

export default TabNav;
