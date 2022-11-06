/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HideKeyboard from './src/components/HideKeyboard/HideKeyboard.component';
import {LogInNavigator} from './src/Navigation/LogInNavigator/LogIn.Navigation';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <HideKeyboard>
          <KeyboardAvoidingView enabled style={{flex: 1}}>
            <LogInNavigator />
          </KeyboardAvoidingView>
        </HideKeyboard>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
