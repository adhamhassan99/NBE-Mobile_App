import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {ToggleButton} from 'react-native-paper';

import {Title, Row} from './ListHeader.styles';
import {
  ListFilters,
  ListFilters2,
  ListIcon1,
  ListIcon2,
} from '../../assets/images';
const ListHeader = ({listToggled, setListToggled}) => {
  return (
    <Row>
      <Title>Benefeciaries</Title>
      <TouchableOpacity onPress={setListToggled}>
        <Image source={listToggled ? ListFilters2 : ListFilters} />
      </TouchableOpacity>
    </Row>
  );
};

export default ListHeader;
