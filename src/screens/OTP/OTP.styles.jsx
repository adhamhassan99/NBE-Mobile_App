import styled from 'styled-components';

const OTPContainer = styled.SafeAreaView`
  padding: ${props => (props.pTop || 0) + 20}px 20px 0px 20px;
  background-color: rgba(31, 41, 51, 1);
  flex: 1;
`;

const Title = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 25px;
`;
const TitleDark = styled.Text`
  color: black;
  font-weight: 700;
  font-size: 20px;
`;
const SubTitle = styled.Text`
  color: ${props => (props.white ? 'white' : 'rgba(183, 183, 183, 1)')};
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 10px;
`;
const SubTitleCenter = styled.Text`
  color: rgba(183, 183, 183, 1);
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
  text-align: center;
`;
const BtnContainer = styled.TouchableOpacity`
  background-color: rgba(0, 114, 54, 1);
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  border-radius: 10px;
`;

const BtnText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;
export {
  OTPContainer,
  Title,
  SubTitle,
  TitleDark,
  BtnContainer,
  SubTitleCenter,
  BtnText,
};
