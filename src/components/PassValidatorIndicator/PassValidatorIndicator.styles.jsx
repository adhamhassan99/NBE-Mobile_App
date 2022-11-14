import styled from 'styled-components';

const IndicatorContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 48%;
  margin-bottom: 10px;
`;

const IndicatorCircle = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${props =>
    props.valid == true ? 'rgba(18, 167, 89, 1)' : 'rgba(183, 183, 183, 1)'};
`;

const IndicatorText = styled.Text`
  color: white;
  font-size: 15px;
  margin-left: 10px;
`;
export {IndicatorCircle, IndicatorContainer, IndicatorText};
