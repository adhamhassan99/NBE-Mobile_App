import {View, Text, Touc, Image} from 'react-native';
import React from 'react';
import {
  ItemContainer,
  VendorImage,
  VendorInfo,
  VendorName,
  Date,
  Col,
  Amount,
} from './HistoryListItem.styles';

const HistoryListItem = ({image, vendor, date, amount}) => {
  return (
    <ItemContainer>
      <VendorInfo>
        <VendorImage source={image} />
        <Col>
          <VendorName>{vendor}</VendorName>
          <Date>{date}</Date>
        </Col>
      </VendorInfo>
      <Amount>${amount}</Amount>
    </ItemContainer>
  );
};

export default HistoryListItem;
