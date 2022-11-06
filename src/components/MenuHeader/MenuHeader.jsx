import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {HeaderContainer} from './MenuHeader.styles';
import {IconButton} from 'react-native-paper';
import {ArrowLeft, BackBtnDark, FullBrandDark} from '../../assets/images';

const MenuHeader = ({navigation}) => {
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={BackBtnDark} />
      </TouchableOpacity>
      <Image source={FullBrandDark} />
    </HeaderContainer>
  );
};

export default MenuHeader;
