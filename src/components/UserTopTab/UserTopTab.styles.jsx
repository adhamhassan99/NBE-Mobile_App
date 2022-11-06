import styled from 'styled-components';
import {IconButton} from 'react-native-paper';
export const TopBarContainer = styled.View`
  display: flex;
  flex: 0.1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const Col = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;
export const ColSingle = styled.View`
  display: flex;
  flex-direction: row;
`;
export const StackedView = styled.View`
  display: flex;
`;
export const Username = styled.Text`
  color: white;
  font-weight: ${props => (props.bold ? 700 : 300)};
  font-size: 16px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 10px;
`;

export const NotifBtn = styled(IconButton)`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
`;
export const BurgerMenuImage = styled.Image`
  width: 20px;
  height: 17px;
`;
