import styled from 'styled-components';

const OTPContainer = styled.SafeAreaView`
  padding: ${props => (props.pTop || 0) + 20}px 20px 0px 20px;
  background-color: rgba(31, 41, 51, 1);
  flex: 1;
`;

export {OTPContainer};
