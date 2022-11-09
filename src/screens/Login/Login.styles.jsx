import {StyleSheet} from 'react-native';
import styled from 'styled-components';

export default styles = StyleSheet.create({
  LogInContainer: {
    flex: 1,
    paddingTop: 0,
  },
  img: {
    flex: 1,
    tintColor: 'black',
  },
  TintedView: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
  },
});

const StyledView = styled.View`
  background-color: ${props =>
    props.darker ? 'rgba(28, 36, 55, 0.77)' : 'rgba(0, 0, 0, 0.6)'};
  flex: 1;
`;

export {StyledView};
