import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './Home.styles';
import styled from 'styled-components';
import UserTopTab from '../../components/UserTopTab/UserTopTab';
import ShowBalance from '../../components/ShowBalance/ShowBalance.component';
import FingerPrintModal from '../../components/FingerPrintModal/FingerPrintModal';
import WidgetSection from '../../components/WidgetSection/WidgetSection';
import SendMoney from '../../components/SendMoney/SendMoney';
import History from '../../components/History/History';

const HomeContainer = styled.View`
  background-color: rgba(31, 41, 51, 1);
  flex: 1;
  padding: 50px 20px 0px 20px;
`;

const Home = ({navigation}) => {
  return (
    <HomeContainer>
      <UserTopTab user={'Adham'} nav={navigation} />
      <ShowBalance />
      <WidgetSection />
      <SendMoney nav={navigation} />
      <History nav={navigation} />
    </HomeContainer>
  );
};

export default Home;
