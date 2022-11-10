import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {HeaderContainer} from './MenuHeader.styles';
import {BackBtnDark, FullBrandDark} from '../../assets/images';

const MenuHeader = ({navigation, logoOnly}) => {
  return (
    <HeaderContainer>
      {logoOnly ? null : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackBtnDark} />
        </TouchableOpacity>
      )}

      <Image style={{marginLeft: 'auto'}} source={FullBrandDark} />
    </HeaderContainer>
  );
};

export default MenuHeader;
