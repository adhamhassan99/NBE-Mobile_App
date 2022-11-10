import styled from 'styled-components';

const EntryContainer = styled.SafeAreaView`
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
  color: rgba(183, 183, 183, 1);
  font-size: 15px;
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
  background-color: rgba(50, 63, 75, 1);
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  padding: 5px 20px;
  border: ${props =>
    props.border === true
      ? '2px solid rgba(18, 167, 89, 1)'
      : '0px solid white'};
`;
const EntryView = styled.View`
  margin-left: 20px;
  flex: 1;
`;
const EntryLabel = styled.Text`
  color: ${props =>
    props.highlight === true ? 'rgba(18, 167, 89, 1)' : '#fff'};
  font-weight: 700;
`;

const InputText = styled.TextInput`
  color: rgba(203, 210, 217, 1);
  font-weight: 400;
  font-size: 16px;
`;
export {
  EntryContainer,
  Title,
  SubTitle,
  TitleDark,
  BtnContainer,
  SubTitleCenter,
  InputText,
  EntryView,
  EntryLabel,
};
