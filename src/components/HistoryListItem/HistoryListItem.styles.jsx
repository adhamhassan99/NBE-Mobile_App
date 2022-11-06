import styled from 'styled-components';

export const ItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const VendorInfo = styled.View`
  display: flex;
  flex-direction: row;
`;

export const VendorImage = styled.Image`
  width: 50px;
  height: 50px;
  scale: 120%;
`;

export const VendorName = styled.Text`
  color: ${props => props.color || 'white'};
  font-weight: 400;
  font-size: 18px;
`;

export const Date = styled.Text`
  color: rgba(183, 183, 183, 1);
  font-size: 14px;
`;

export const Col = styled.View`
  margin-left: 10px;
  justify-content: space-between;
`;
export const Amount = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 700;
`;
