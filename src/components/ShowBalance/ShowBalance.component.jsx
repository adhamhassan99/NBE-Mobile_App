import {View, Text, ImageBackground, Image} from "react-native";
import React from "react";
import {
  BalanceContainer,
  BackgroundImage,
  Row,
  StyledText,
  StyledFingerPrint,
  StyledImage,
} from "./Showbalance.styles";
import {FingerPrint, ShowBalanceCard} from "../../assets/images";

const ShowBalance = () => {
  return (
    <BalanceContainer>
      <BackgroundImage source={ShowBalanceCard}>
        <Row>
          <StyledText size={18} color={"white"}>
            Balance
          </StyledText>
          <StyledFingerPrint>
            <StyledImage source={FingerPrint} />
          </StyledFingerPrint>
        </Row>
        <Row justify="center">
          <StyledText weight={700} MTop={10} size={22} color={"white"}>
            Press here to show balance
          </StyledText>
        </Row>
      </BackgroundImage>
    </BalanceContainer>
  );
};

export default ShowBalance;
