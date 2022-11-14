import {View, Text} from 'react-native';
import React from 'react';
import {
  IndicatorCircle,
  IndicatorContainer,
  IndicatorText,
} from './PassValidatorIndicator.styles';

const PassValidatorIndicator = ({label, validState}) => {
  return (
    <IndicatorContainer>
      <IndicatorCircle valid={validState} />
      <IndicatorText>{label}</IndicatorText>
    </IndicatorContainer>
  );
};

export default PassValidatorIndicator;
