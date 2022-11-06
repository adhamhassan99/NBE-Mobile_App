import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {
  SendMoneyContainer,
  MainText,
  DimmedTouchable,
} from './SendMoney.styles';
import {Row} from '../ShowBalance/Showbalance.styles';
import {ListData} from './ListData';
import ListItem from '../ListItem/ListItem';

const SendMoney = ({nav}) => {
  const renderItem = ({item}) => {
    return <ListItem {...item} />;
  };
  return (
    <SendMoneyContainer>
      <Row>
        <MainText>Send money</MainText>
        <TouchableOpacity
          onPress={() => nav.navigate('Transfer')}
          style={{justifyContent: 'center'}}>
          <DimmedTouchable>View All</DimmedTouchable>
        </TouchableOpacity>
      </Row>
      <FlatList
        style={{marginTop: 10}}
        horizontal
        data={ListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SendMoneyContainer>
  );
};

export default SendMoney;
