import {View, Text, Image} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {DownArrow} from '../../assets/images';
import {DropDownText} from './DropDown.styles';

const DropDown = ({data, label}) => {
  return (
    <View style={{marginTop: 10}}>
      <DropDownText>{label}</DropDownText>
      <SelectDropdown
        defaultValueByIndex={0}
        dropdownStyle={{
          backgroundColor: 'rgba(50, 63, 75, 1)',
        }}
        buttonStyle={{
          backgroundColor: 'rgba(50, 63, 75, 1)',
          width: 'auto',
          borderRadius: 10,
          height: 75,
        }}
        buttonTextStyle={{
          color: 'white',
          fontSize: 16,
        }}
        rowTextStyle={{color: 'white'}}
        dropdownIconPosition="right"
        renderDropdownIcon={() => (
          <Image style={{width: 15, height: 20}} source={DownArrow} />
        )}
        defaultButtonText={label}
        data={data}
      />
    </View>
  );
};

export default DropDown;
