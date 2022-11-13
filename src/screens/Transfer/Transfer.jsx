import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Button,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TransferContainer} from './Transfer.styles';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import {Title} from '../../components/ListHeader/ListHeader.styles';
import DropDown from '../../components/DropDown/DropDown';
import {TextInput} from 'react-native-paper';
import {RectBtn} from '../../components/LogInForm.component';
import {BtnText, SubmitBtn} from '../SetPassword/SetPassword.styles';

const Transfer = ({navigation}) => {
  const TransferType = [
    'Between your accounts',
    'Within the same bank',
    'To a different Bank',
  ];
  const AccountsList = [
    '042-653214521245   -   $2,145,5874.25',
    '042-65324878731245   -   $1,3789',
    '042-6532142221455645   -   $5,487487',
  ];
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TransferContainer margin={StatusBar.currentHeight}>
        <MenuHeader navigation={navigation} />
        <Title style={{marginBottom: 10}}>Transfer</Title>
        <ScrollView>
          <DropDown data={TransferType} label="Type of Transfer" />
          <DropDown data={AccountsList} label="Transfer from" />
          <DropDown data={AccountsList} label="Transfer to" />
          <TextInput
            theme={{
              roundness: 10,
              colors: {placeholder: 'rgba(0, 114, 54, 1)'},
            }}
            style={{
              marginTop: 10,
              height: 65,
              borderWidth: 3,
              borderColor: 'rgba(0, 114, 54, 1)',
              borderRadius: 10,
            }}
            activeUnderlineColor="none"
            label={'Amount to transfer'}
            onSubmitEditing={() => null}
          />
          <TextInput
            theme={{
              roundness: 10,
            }}
            style={{
              marginTop: 10,
              height: 65,
              borderRadius: 10,
            }}
            activeUnderlineColor="none"
            label={'Reason to transfer'}
            onSubmitEditing={() => null}
          />
        </ScrollView>

        <SubmitBtn
          selfCenter
          onPress={() =>
            navigation.navigate('OTP', {phone: '01001212382', type: 'transfer'})
          }>
          <BtnText>Submit</BtnText>
        </SubmitBtn>
      </TransferContainer>
    </KeyboardAvoidingView>
  );
};

export default Transfer;
