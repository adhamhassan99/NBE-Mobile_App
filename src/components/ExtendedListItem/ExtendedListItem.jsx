import {View, Text, Image} from 'react-native';
import React from 'react';
import {ExtendeditemContainer, Name, Info} from './ExtendedListItem.styles';

const ExtendedListItem = ({fullName, phone, balance, image}) => {
  return (
    <ExtendeditemContainer>
      <View>
        <Image style={{width: 80, height: 80}} source={image} />
      </View>
      <View>
        <Name>{fullName}</Name>
        <Info>{phone}</Info>
        <Info>{balance}</Info>
      </View>
    </ExtendeditemContainer>
  );
};

export default ExtendedListItem;
