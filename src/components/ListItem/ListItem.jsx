import React from 'react';
import {Image, Text, View} from 'react-native';
import {ItemContainer, ListText} from './ListItem.styles';

const ListItem = ({name, id, image, marginBot = 0}) => {
  return (
    <ItemContainer marginBot={marginBot}>
      <Image style={{flex: 0.65}} source={image} />

      <ListText>{name}</ListText>
    </ItemContainer>
  );
};

export default ListItem;
