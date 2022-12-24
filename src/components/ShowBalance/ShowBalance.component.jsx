import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  BalanceContainer,
  BackgroundImage,
  Row,
  StyledText,
  StyledFingerPrint,
  StyledImage,
} from './Showbalance.styles';
import {FingerPrint, ShowBalanceCard} from '../../assets/images';
import styles from './Showbalance.styles';
import toCurrency from '../../utils/toCurrency';

const ShowBalance = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <BalanceContainer onPress={() => setPressed(!pressed)}>
      <BackgroundImage style={styles.bgImg} source={ShowBalanceCard}>
        <Row>
          <StyledText size={18} color={'white'}>
            Balance
          </StyledText>
          <StyledFingerPrint>
            <StyledImage source={FingerPrint} />
          </StyledFingerPrint>
        </Row>
        <Row justify="center">
          {!pressed ? (
            <StyledText weight={700} MTop={10} size={22} color={'white'}>
              Press here to show balance
            </StyledText>
          ) : (
            <Text style={styles.balanceText}>$12636267827</Text>
          )}
        </Row>
      </BackgroundImage>
    </BalanceContainer>
  );
};

export default ShowBalance;
