import React from "react";
import styled from "styled-components";
import {Text} from "react-native";
const FooterView = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  flex: 0.07;
`;

const FooterLinks = styled.Text`
  color: rgba(244, 147, 34, 1);
  font-size: 12px;
  font-weight: 700;
`;

const CopyRight = styled.Text`
  color: #ffffff;
  font-size: 10px;
`;

const Separator = styled.Text`
  color: #ffffff;
  font-size: 12px;
`;

const FormRow = styled.View`
  justify-content: ${props => props.justify || `space-between`};
  flex-direction: row;
  width: 35%;
`;

const LogInFooter = () => {
  return (
    <FooterView>
      <FormRow>
        <FooterLinks>Contact Us</FooterLinks>
        <Separator>-</Separator>
        <FooterLinks>FAQs</FooterLinks>
        <Separator>-</Separator>
        <FooterLinks>Help</FooterLinks>
      </FormRow>

      <CopyRight>
        Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
      </CopyRight>
    </FooterView>
  );
};

export default LogInFooter;
