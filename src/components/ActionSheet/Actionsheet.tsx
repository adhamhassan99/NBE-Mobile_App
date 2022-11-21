import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ActionSheet, { SheetManager, SheetProps } from 'react-native-actions-sheet';
import { DarkFPBtn } from '../../assets/images';
import { MainText } from './Actionsheet.styles';

function Actionsheet(props: SheetProps) {
  const SheetHide= ()=>SheetManager.hide("fingerprint-sheet")
  return (
    <ActionSheet containerStyle={{backgroundColor:"white",borderTopLeftRadius: 20,borderTopRightRadius: 20,height:"35%"}} id={props.sheetId}>
      <View
        style={{
          display: 'flex', 
          height:"100%",
          backgroundColor: 'rgba(17, 17, 17, 1)',
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View>
          <MainText>Fingerprint for NBE Mobile</MainText>
        </View>
        <View>
          <MainText smaller>Log in with your fingerprint</MainText>
        </View>
        <View style={{alignItems: 'center', marginVertical: 15}}>
          <Image source={DarkFPBtn} style={{marginBottom: 10}} />
          <MainText smaller centerAligned color="rgba(183, 183, 183, 1)">
            Touch the fingerprint sensors
          </MainText>
        </View>
        <TouchableOpacity style={{marginTop: 'auto'}} onPress={SheetHide}>
          <MainText rightAligned color="rgba(18, 167, 89, 1)">
            Cancel
          </MainText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
}
 
export default Actionsheet;