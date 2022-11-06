import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../../screens";
const HomeStack = createNativeStackNavigator();

export const HomeNavgator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </HomeStack.Navigator>
  );
};
