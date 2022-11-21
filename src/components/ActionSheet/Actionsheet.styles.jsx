import styled from 'styled-components';

const MainText = styled.Text`
  color: ${props => props.color || 'white'};
  font-weight: ${props => (props.smaller ? 400 : 700)};
  font-size: ${props => (props.smaller ? 15 : 20)}px;
  margin-bottom: 10px;
  align-self: ${props =>
    props.rightAligned
      ? 'flex-end'
      : props.centerAligned
      ? 'center'
      : 'flex-start'};
`;

export {MainText};
