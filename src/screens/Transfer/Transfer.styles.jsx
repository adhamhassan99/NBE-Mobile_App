import styled from 'styled-components';

const TransferContainer = styled.SafeAreaView`
  margin: 0;
  padding: ${props => (props.margin || 0) + 15}px 20px 0px 20px;
  background-color: rgba(31, 41, 51, 1);
  flex: 1;
`;

export {TransferContainer};
