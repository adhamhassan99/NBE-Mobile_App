import {Image} from 'react-native';
import React from 'react';
import {WidgetContainer, IconContainer, StyledText} from './Widget.styles';

const Widget = ({text, image, color, onPress}) => {
  return (
    <WidgetContainer onPress={() => onPress()}>
      <IconContainer onPress={() => onPress()} color={color}>
        <Image source={image} />
      </IconContainer>
      <StyledText>{text}</StyledText>
    </WidgetContainer>
  );
};

export default Widget;
