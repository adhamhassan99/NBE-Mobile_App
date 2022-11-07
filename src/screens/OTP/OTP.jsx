import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {OTPContainer} from './OTP.styles';
import MenuHeader from '../../components/MenuHeader/MenuHeader';

const OTP = ({navigation}) => {
  return (
    <OTPContainer pTop={StatusBar.currentHeight}>
      <MenuHeader navigation={navigation} />
      <Text>OTP</Text>
    </OTPContainer>
  );
};

export default OTP;
