import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {MainText} from './FingerPrintModal.styles';
import {DarkFPBtn} from '../../assets/images';

const FingerPrintModal = ({toggleDialog, fingerPrintBtn, title = ''}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={fingerPrintBtn}
      onRequestClose={toggleDialog}>
      <View
        style={{
          display: 'flex',
          height: '35%',
          marginTop: 'auto',
          backgroundColor: 'rgba(17, 17, 17, 1)',
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View>
          <MainText>Fingerprint for NBE Mobile</MainText>
        </View>
        <View>
          <MainText smaller>{title}</MainText>
        </View>
        <View style={{alignItems: 'center', marginVertical: 15}}>
          <Image source={DarkFPBtn} style={{marginBottom: 10}} />
          <MainText smaller centerAligned color="rgba(183, 183, 183, 1)">
            Touch the fingerprint sensors
          </MainText>
        </View>
        <TouchableOpacity style={{marginTop: 'auto'}} onPress={toggleDialog}>
          <MainText rightAligned color="rgba(18, 167, 89, 1)">
            Cancel
          </MainText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FingerPrintModal;
