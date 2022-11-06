import {View, Text, Image} from "react-native";
import React from "react";
import {WidgetContainer, IconContainer, StyledText} from "./Widget.styles";

const Widget = ({text, image, color}) => {
  return (
    <WidgetContainer>
      <IconContainer color={color}>
        <Image source={image} />
      </IconContainer>
      <StyledText>{text}</StyledText>
    </WidgetContainer>
  );
};

export default Widget;
