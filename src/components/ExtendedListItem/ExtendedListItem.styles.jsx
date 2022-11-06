import styled from 'styled-components';

const ExtendeditemContainer = styled.TouchableOpacity`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  flex-direction: row;
  flex: 1;
  background-color: rgba(50, 63, 75, 1);
  margin-bottom: 20px;
  border-radius: 18px;
  box-sizing: border-box;
`;
const Name = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 18px;
`;

const Info = styled.Text`
  color: rgba(183, 183, 183, 1);
  font-size: 15px;
`;

export {ExtendeditemContainer, Name, Info};
