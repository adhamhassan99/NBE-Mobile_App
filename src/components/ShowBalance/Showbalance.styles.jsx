import {StyleSheet} from 'react-native';
import styled from 'styled-components';

export const BalanceContainer = styled.Pressable`
  flex: 0.25;
  margin-top: 30px;
`;
export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  padding: 20px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'space-between'};
`;

export const StyledText = styled.Text`
  color: ${props => props.color};
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size}px;
  margin-top: ${props => props.MTop || 0}px;
`;
export const StyledFingerPrint = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  align-items: center;
  border-radius: 8px;
  border: 1.5px solid rgba(246, 167, 33, 1);
`;

export const StyledImage = styled.Image`
  height: 15px;
  width: 15px;
`;

export default styles = StyleSheet.create({
  balanceText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    marginTop: 20,
  },
  bgImg: {
    tintColor: 'black',
  },
});
