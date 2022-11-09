import {View, Text, Button} from 'react-native';
import React from 'react';

const SetPassword = ({navigation}) => {
  return (
    <View>
      <Text>SetPassword</Text>
      <Button onPress={() => navigation.navigate('Home')} title="go to home" />
    </View>
  );
};

export default SetPassword;
