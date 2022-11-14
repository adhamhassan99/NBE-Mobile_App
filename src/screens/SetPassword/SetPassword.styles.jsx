import styled from 'styled-components';

const SubmitBtn = styled.TouchableOpacity`
  background-color: ${props =>
    props.disabled == true
      ? 'red'
      : props.inverted
      ? 'white'
      : 'rgba(18, 167, 89, 1)'};
  align-items: center;
  padding: 15px 0px;
  margin-top: auto;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const BtnText = styled.Text`
  color: ${props => (props.inverted ? 'rgba(18, 167, 89, 1)' : 'white')};
  font-weight: 700;
  font-size: 18px;
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
  margin-bottom: 20px;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  padding: 10px 20px;
  padding-right: 10px;
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
    props.highlight === true
      ? 'rgba(18, 167, 89, 1)'
      : 'rgba(183, 183, 183, 1)'};
  font-weight: ${props => (props.light ? 400 : 700)};
  font-size: ${props => (props.light ? 16 : 14)}px;
  margin-bottom: ${props => (props.light ? 35 : 0)}px;
`;
const Header = styled.Text`
  color: white;
  font-weight: 700;
  font-size: ${props => (props.larger ? 30 : 22)}px;
`;

const InputText = styled.TextInput`
  color: rgba(203, 210, 217, 1);
  font-weight: 400;
  font-size: 16px;
  padding: 0;
`;
export {
  SubmitBtn,
  BtnText,
  Title,
  SubTitle,
  TitleDark,
  BtnContainer,
  SubTitleCenter,
  InputText,
  EntryView,
  EntryLabel,
  Header,
};
