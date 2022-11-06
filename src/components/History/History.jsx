import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import {MainText, DimmedTouchable, HistoryContainer} from './History.styles';
import {Row} from '../ShowBalance/Showbalance.styles';
import HistoryData from './HistoryData';
import HistoryListItem from '../HistoryListItem/HistoryListItem';

import ListSeparator from '../ListSeparator/ListSeparator';
import {Separator} from '../ListSeparator/ListSeparator.styles';

const History = ({nav}) => {
  const renderItem = ({item}) => {
    return <HistoryListItem {...item} />;
  };
  return (
    <HistoryContainer>
      <Row>
        <MainText>History</MainText>
        <TouchableOpacity onPress={() => nav.navigate('Benefeciaries')}>
          <DimmedTouchable>View All</DimmedTouchable>
        </TouchableOpacity>
      </Row>
      <FlatList
        ItemSeparatorComponent={<Separator />}
        data={HistoryData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </HistoryContainer>
  );
};

export default History;
