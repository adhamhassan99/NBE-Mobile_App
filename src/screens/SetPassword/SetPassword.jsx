import {View, Text, Button, Image, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  BtnContainer,
  EntryLabel,
  EntryView,
  InputText,
  Header,
  SubmitBtn,
  BtnText,
} from './SetPassword.styles';
import {PassBtnIcon, PassToggle} from '../../assets/images';
import UserTopTab from '../../components/UserTopTab/UserTopTab';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import SafeAreaViewContainer from '../../components/SafeAreaViewContainer/SafeAreaViewContainer';

const SetPassword = ({navigation}) => {
  const [passValue, setPassValue] = useState('');
  const [passValue2, setPassValue2] = useState('');
  const [InputHighlight, setInputHighlight] = useState(false);
  const [InputHighlight2, setInputHighlight2] = useState(false);
  const [pass1Visible, setPass1Visible] = useState(false);
  const [pass2Visible, setPass2Visible] = useState(false);

  const handlePassChange = text => {
    setPassValue(text);
    const regx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    console.log(regx.test(text));
  };
  return (
    <SafeAreaViewContainer>
      <MenuHeader navigation={navigation} />
      <Header>Set your password</Header>
      <EntryLabel light>
        Enter a strong password for your online banking account
      </EntryLabel>

      <BtnContainer border={InputHighlight}>
        <Image source={PassBtnIcon} />
        <EntryView>
          <EntryLabel highlight={InputHighlight}>Password</EntryLabel>

          <InputText
            secureTextEntry={pass1Visible}
            placeholderTextColor="rgba(183, 183, 183, 1)"
            selectionColor="rgba(18, 167, 89, 1)"
            placeholder="Enter your password"
            placeholderColor="rgba(183, 183, 183, 1)"
            onFocus={() => setInputHighlight(true)}
            onEndEditing={() => setInputHighlight(false)}
            value={passValue}
            editable
            onChangeText={text => handlePassChange(text)}></InputText>
        </EntryView>
        <Pressable
          onPress={() => setPass1Visible(!pass1Visible)}
          style={{marginTop: 'auto'}}>
          <Image source={PassToggle} />
        </Pressable>
      </BtnContainer>

      <BtnContainer border={InputHighlight2}>
        <Image source={PassBtnIcon} />
        <EntryView>
          <EntryLabel highlight={InputHighlight2}>Confirm Password</EntryLabel>
          <InputText
            secureTextEntry={pass2Visible}
            placeholderTextColor="rgba(183, 183, 183, 1)"
            selectionColor="rgba(18, 167, 89, 1)"
            placeholder="Re-Write your password here"
            placeholderColor="rgba(183, 183, 183, 1)"
            onFocus={() => setInputHighlight2(true)}
            onEndEditing={() => setInputHighlight2(false)}
            value={passValue2}
            editable
            onChangeText={text => setPassValue2(text)}></InputText>
        </EntryView>
        <Pressable
          onPress={() => setPass2Visible(!pass2Visible)}
          style={{marginTop: 'auto'}}>
          <Image source={PassToggle} />
        </Pressable>
      </BtnContainer>
      <SubmitBtn onPress={() => navigation.navigate('SignUpSuccess')}>
        <BtnText>Submit</BtnText>
      </SubmitBtn>
    </SafeAreaViewContainer>
  );
};

export default SetPassword;
