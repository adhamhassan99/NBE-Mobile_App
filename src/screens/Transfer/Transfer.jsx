import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {TransferContainer} from './Transfer.styles';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import {Title} from '../../components/ListHeader/ListHeader.styles';
import DropDown from '../../components/DropDown/DropDown';

const Transfer = ({navigation}) => {
  return (
    <TransferContainer margin={StatusBar.currentHeight}>
      <MenuHeader navigation={navigation} />
      <Title>Transfer</Title>
      <DropDown />
    </TransferContainer>
  );
};

export default Transfer;
