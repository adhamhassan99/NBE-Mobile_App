import {View, Text, SafeAreaView, StatusBar, FlatList} from 'react-native';
import React, {useState} from 'react';
import {BenefeciariesContainer} from './Benefeciaries.styles';
import UserTopTab from '../../components/UserTopTab/UserTopTab';
import ListHeader from '../../components/ListHeader/ListHeader';

import BenefListData from './BenefListData';
import ListItem from '../../components/ListItem/ListItem';
import ExtendedListItem from '../../components/ExtendedListItem/ExtendedListItem';

const Benefeciaries = () => {
  const emptyList = [];
  const [listToggled, setListToggled] = useState(false);
  const ToggleFilter = () => {
    setListToggled(!listToggled);
  };

  const renderItem = ({item}) => {
    return <ListItem marginBot={15} {...item} />;
  };
  const renderExtendedItem = ({item}) => {
    return <ExtendedListItem {...item} />;
  };

  return (
    <BenefeciariesContainer margin={StatusBar.currentHeight}>
      <UserTopTab day user="Adham" />
      <ListHeader listToggled={listToggled} setListToggled={ToggleFilter} />
      {listToggled ? (
        <FlatList
          ListEmptyComponent={<Text>s</Text>}
          style={{
            marginTop: 40,
            flex: 1,
          }}
          key={'_'}
          data={BenefListData}
          renderItem={renderExtendedItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList
          key={'#'}
          ListEmptyComponent={<Text>s</Text>}
          style={{
            marginTop: 40,
            flex: 1,
          }}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={BenefListData}
          numColumns={4}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </BenefeciariesContainer>
  );
};

export default Benefeciaries;
