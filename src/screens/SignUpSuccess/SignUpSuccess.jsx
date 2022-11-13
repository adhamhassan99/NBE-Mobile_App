import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import SafeAreaViewContainer from '../../components/SafeAreaViewContainer/SafeAreaViewContainer';
import {SignUpSuccessPic} from '../../assets/images';
import {BtnText, Header, SubmitBtn} from '../SetPassword/SetPassword.styles';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import {SubTitle} from '../OTP/OTP.styles';

const SignUpSuccess = ({navigation}) => {
  return (
    <SafeAreaViewContainer color="green">
      <ImageBackground
        resizeMode="cover"
        source={SignUpSuccessPic}
        style={{
          flex: 1,
          paddingLeft: 20,
        }}>
        <MenuHeader logoOnly={true} />
        <Header larger>Congratulations</Header>
        <SubTitle white>
          You have successfully registered in NBE online banking service
        </SubTitle>
        <SubmitBtn
          inverted
          selfCenter
          onPress={() => navigation.navigate('TabNav')}>
          <BtnText inverted>Finish</BtnText>
        </SubmitBtn>
      </ImageBackground>
    </SafeAreaViewContainer>
  );
};

export default SignUpSuccess;
