import {View, Text, StatusBar, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  EntryContainer,
  SubTitle,
  Title,
  BtnContainer,
  EntryView,
  EntryLabel,
  InputText,
} from './MobileNumberEntry.styles';
import MenuHeader from '../MenuHeader/MenuHeader';
import {RectBtn} from '../LogInForm.component';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PhoneIcon} from '../../assets/images';
import {BtnText, SubmitBtn} from '../../screens/SetPassword/SetPassword.styles';

const MobileNumberEntry = ({navigation}) => {
  const [TextValue, setTextValue] = useState('+20');
  const [InputHighlight, setInputHighlight] = useState(false);

  return (
    <EntryContainer pTop={StatusBar.currentHeight}>
      <MenuHeader navigation={navigation} />
      <Title>Mobile Number</Title>
      <SubTitle>Enter the mobile number registred in the bank</SubTitle>

      <BtnContainer border={InputHighlight}>
        <Image source={PhoneIcon} />
        <EntryView>
          <EntryLabel highlight={InputHighlight}>Mobile Number</EntryLabel>
          <InputText
            onFocus={() => setInputHighlight(true)}
            onEndEditing={() => setInputHighlight(true)}
            value={TextValue}
            editable
            onChangeText={text => setTextValue(text)}></InputText>
        </EntryView>
      </BtnContainer>

      <SubmitBtn
        onPress={() =>
          navigation.navigate('OTP', {phone: TextValue, type: 'signup'})
        }>
        <BtnText>Submit</BtnText>
      </SubmitBtn>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{color: 'rgba(128, 128, 128, 1)'}}>
          By signing up, you agree to our{' '}
          <Text style={{color: '#ffffff', fontWeight: '600'}}>
            Terms of Service
          </Text>{' '}
          and acknowledge that you have read our{' '}
          <Text style={{color: '#ffffff', fontWeight: '600'}}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </EntryContainer>
  );
};

export default MobileNumberEntry;
