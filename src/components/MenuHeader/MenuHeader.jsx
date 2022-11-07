import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {HeaderContainer} from './MenuHeader.styles';
import {BackBtnDark, FullBrandDark} from '../../assets/images';

const MenuHeader = ({navigation}) => {
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={BackBtnDark} />
      </TouchableOpacity>
      <Image source={FullBrandDark} />
    </HeaderContainer>
  );
};

export default MenuHeader;
