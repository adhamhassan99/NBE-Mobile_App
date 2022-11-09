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

const MobileNumberEntry = ({route}) => {
  const {nav} = route.params;
  const [TextValue, setTextValue] = useState('+20');
  const [InputHighlight, setInputHighlight] = useState(false);

  return (
    <EntryContainer pTop={StatusBar.currentHeight}>
      <MenuHeader navigation={nav} />
      <Title>Mobile Number</Title>
      <SubTitle>Enter the mobile number registred in the bank</SubTitle>

      <BtnContainer border={InputHighlight}>
        <Image source={PhoneIcon} />
        <EntryView>
          <EntryLabel highlight={InputHighlight}>Mobile Number</EntryLabel>
          <InputText
            onFocus={() => setInputHighlight(true)}
            onEndEditing={() => setInputHighlight(false)}
            value={TextValue}
            editable
            onChangeText={text => setTextValue(text)}></InputText>
        </EntryView>
      </BtnContainer>

      <RectBtn
        onPress={() => nav.navigate('OTP', {phone: TextValue, type: 'signup'})}
        style={{marginTop: 'auto', marginBottom: 20}}
        mode="contained"
        textColor="white"
        flex={0.1}
        labelStyle={{fontSize: 18}}>
        Next
      </RectBtn>
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
