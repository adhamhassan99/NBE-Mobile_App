import styled from "styled-components";

export const WidgetContainer = styled.TouchableOpacity`
  align-items: center;
  box-sizing: border-box;
`;
export const IconContainer = styled.TouchableOpacity`
  background-color: ${props => props.color || "white"};
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 59px;

  border-radius: 13px;
`;

export const StyledText = styled.Text`
  color: white;
  margin-top: 10px;
`;
