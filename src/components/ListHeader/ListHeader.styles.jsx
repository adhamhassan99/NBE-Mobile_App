import styled from 'styled-components';

const Title = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  justify-content: ${props => props.justify || 'space-between'};
`;

export {Title, Row};
