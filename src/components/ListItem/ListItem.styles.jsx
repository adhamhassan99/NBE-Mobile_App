import styled from 'styled-components';

export const ItemContainer = styled.TouchableOpacity`
  width: 77px;
  height: 86px;
  background-color: rgba(50, 63, 75, 1);
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  border-radius: 18px;
  margin-bottom: ${props => props.marginBot || 0}px;
`;

export const ListText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;
