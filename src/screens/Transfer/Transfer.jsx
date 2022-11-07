import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import React from 'react';
import {TransferContainer} from './Transfer.styles';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import {Title} from '../../components/ListHeader/ListHeader.styles';
import DropDown from '../../components/DropDown/DropDown';
import {TextInput} from 'react-native-paper';
import {RectBtn} from '../../components/LogInForm.component';

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
        <Title>Transfer</Title>
        <DropDown data={TransferType} label="Type of Transfer" />
        <DropDown data={AccountsList} label="Transfer from" />
        <DropDown data={AccountsList} label="Transfer to" />
        <TextInput
          theme={{
            roundness: 10,
            colors: {placeholder: 'rgba(0, 114, 54, 1)'},
          }}
          style={{
            marginTop: 30,
            height: 75,
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
            marginTop: 30,
            height: 75,
            borderRadius: 10,
          }}
          activeUnderlineColor="none"
          label={'Reason to transfer'}
          onSubmitEditing={() => null}
        />
        <RectBtn
          onPress={() => navigation.navigate('OTP')}
          style={{marginTop: 'auto', marginBottom: 20}}
          mode="contained"
          textColor="white"
          flex={0.36}
          labelStyle={{fontSize: 18}}>
          Submit
        </RectBtn>
      </TransferContainer>
    </KeyboardAvoidingView>
  );
};

export default Transfer;
