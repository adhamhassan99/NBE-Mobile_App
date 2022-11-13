/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
} from 'react-native';
// import SafeAreaView from "react-native-safe-area-view";

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HideKeyboard from './src/components/HideKeyboard/HideKeyboard.component';
import AppDrawerNavigator from './src/Navigation/DrawerNavigator/DrawerNavigator';
import LogInNavigator from './src/Navigation/LogInNavigator/LogInNavigator';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <SafeAreaView style={{flex: 1}}>
        <HideKeyboard>
          <KeyboardAvoidingView style={{flex: 1}}>
            <LogInNavigator />
          </KeyboardAvoidingView>
        </HideKeyboard>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
