import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Button, Checkbox} from 'react-native-paper';
import {FingerPrint} from '../assets/images';
import {Transfer} from '../screens';
import {SheetManager} from 'react-native-actions-sheet';
const FormInput = styled.TextInput`
  background-color: transparent;
  padding: 20px 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  background-color: ${props =>
    props.transparent ? 'rgba(0, 0, 0, 0.3)' : 'white'};
  border-radius: 10px;
  color: white;
  padding-left: 40px;
`;

const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 0.45;

  justify-content: space-between;
`;

const FormRow = styled.View`
  justify-content: ${props => props.justify || `space-between`};
  flex-direction: row;
`;

const RegText = styled.Text`
  color: ${props => props.color || `white`};
  font-size: 16px;
  text-decoration: ${props => (props.underlined ? `underline` : 'none')};
  text-decoration-color: ${props => (props.underlined ? props.color : 'none')};
`;

const FadedText = styled.Text`
  color: #e4e4e4c5;
  font-size: 16px;
`;

export const RectBtn = styled(Button)`
  background-color: ${props => props.BG || `rgba(18, 167, 89, 1)`};
  flex: ${props => props.flex || 0};
  padding: ${props => props.padding || 7}px;
  border: ${props => props.border || `none`};
  border-radius: 12px;
`;
const StyledFingerPrint = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: 60px;

  align-items: center;
  border-radius: 12.5px;
  border: 1.5px solid rgba(246, 167, 33, 1);
`;

// const TouchableBtn = styled.TouchableOpacity`
//   flex: 1;
// `;

const LogInForm = ({modalToggle, nav}) => {
  const [checked, setChecked] = React.useState(false);
  const sheetToggler = () => {
    SheetManager.show('fingerprint-sheet');
  };
  return (
    <FormContainer>
      <FormInput
        placeholder="Username"
        placeholderTextColor={'white'}
        transparent={true}
      />
      <FormInput
        underlineColorAndroid="none"
        placeholder="Password"
        placeholderTextColor={'#007236'}
      />
      <FormRow>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            uncheckedColor="white"
            color="white"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <RegText> Remember me</RegText>
        </View>

        <FadedText>Forgot Password ?</FadedText>
      </FormRow>
      <FormRow>
        <RectBtn
          mode="contained"
          textColor="white"
          flex={0.9}
          labelStyle={{fontSize: 18}}
          onPress={() => nav.navigate('TabNav')}>
          Log In
        </RectBtn>

        <StyledFingerPrint onPress={sheetToggler}>
          <Image source={FingerPrint} />
        </StyledFingerPrint>
      </FormRow>
      <FormRow justify="center">
        <RegText>
          Dont have an account?
          <RegText
            onPress={() => nav.navigate('SignUpMobileNumber')}
            color="rgba(246, 167, 33, 1)"
            underlined={true}>
            Sign up
          </RegText>
        </RegText>
      </FormRow>
    </FormContainer>
  );
};
export default LogInForm;
