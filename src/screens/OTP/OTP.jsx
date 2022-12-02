import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  OTPContainer,
  Title,
  SubTitle,
  TitleDark,
  WideBtn,
  SubTitleCenter,
  BtnContainer,
  BtnText,
} from './OTP.styles';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {RectBtn} from '../../components/LogInForm.component';
import {Modal, Portal, Text, Provider} from 'react-native-paper';
import {ModalTransfer} from '../../assets/images';
import {StackActions} from '@react-navigation/native';
import {SubmitBtn} from '../SetPassword/SetPassword.styles';

const OTP = ({navigation, route}) => {
  const [visible, setVisible] = React.useState(false);
  const {phone, type} = route.params;
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 0,
    paddingTop: 20,
    borderRadius: 25,
    width: '85%',
    flex: 0.38,
    alignItems: 'center',
  };
  const user = 'Ahmed Mohamed';

  const handleSubmit = () => {
    if (type == 'signup') navigation.navigate('SetPassword');
    else showModal();
  };

  const handleModalClose = navigation => {
    setVisible(false);
    navigation.dispatch(StackActions.popToTop());

    navigation.navigate('Home');
  };
  return (
    <OTPContainer pTop={StatusBar.currentHeight}>
      <MenuHeader navigation={navigation} />
      <Title>Verification</Title>
      <SubTitle>Enter 5 digit code we sent to {phone}</SubTitle>
      <OTPInputView
        style={{
          width: '100%',
          height: 100,
        }}
        pinCount={5}
        placeholderCharacter="_"
        keyboardAppearance="dark"
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        m
        onCodeFilled={handleSubmit}
      />
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Image source={ModalTransfer} />
            <TitleDark>Mission Complete</TitleDark>
            <SubTitleCenter>
              {user} was successfuly added to your beneficiaries list.
            </SubTitleCenter>
            <BtnContainer onPress={() => handleModalClose(navigation)}>
              <BtnText>Finish</BtnText>
            </BtnContainer>
          </Modal>
        </Portal>
      </Provider>

      <SubmitBtn onPress={handleSubmit}>
        <BtnText>Submit</BtnText>
      </SubmitBtn>
    </OTPContainer>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 300,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 45,
    height: 65,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(50, 63, 75, 1)',
    fontWeight: '700',
    fontSize: 25,
  },

  underlineStyleHighLighted: {
    borderWidth: 2,
    borderColor: 'rgba(18, 167, 89, 1)1',
  },
});

export default OTP;
