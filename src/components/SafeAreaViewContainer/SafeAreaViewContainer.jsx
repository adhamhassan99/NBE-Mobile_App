import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

const SafeAreaViewContainer = ({children, color}) => {
  const topPadding = StatusBar.currentHeight + 10;
  const BgColor =
    color === 'green' ? 'rgba(0, 114, 54, 1)' : 'rgba(31, 41, 51, 1)';
  const leftPadd = color === 'green' ? 0 : 20;
  return (
    <SafeAreaView
      style={{
        position: 'relative',
        paddingTop: topPadding,
        paddingRight: 20,
        paddingLeft: leftPadd,
        backgroundColor: BgColor,
        flex: 1,
      }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewContainer;
