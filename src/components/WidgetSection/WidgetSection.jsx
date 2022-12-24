import {RowView} from './WidgetSection.styles';
import React from 'react';
import {Text} from 'react-native';
import Widget from '../Widget/Widget';
import {
  AccountsIcon,
  CardsIcon,
  UtilitiesIcon,
  HistoryIcon,
} from '../../assets/images';

const widgets = [
  {text: 'Accounts', image: AccountsIcon, color: 'rgba(0, 201, 116, 0.15)'},
  {text: 'Cards', image: CardsIcon, color: 'rgba(0, 173, 248, 0.15)'},
  {text: 'Utilities', image: UtilitiesIcon, color: 'rgba(246, 167, 33, 0.15)'},
  {text: 'History', image: HistoryIcon, color: 'rgba(255, 0, 46, 0.15)'},
];

export default function WidgetSection({onPress}) {
  return (
    <RowView>
      {widgets.map((item, index) => {
        return (
          <Widget
            onPress={() => onPress(item.text)}
            key={index}
            image={item.image}
            text={item.text}
            color={item.color}
          />
        );
      })}
    </RowView>
  );
}
