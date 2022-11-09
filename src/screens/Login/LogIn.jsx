import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles, {StyledView} from './Login.styles';
import LogInFooter from '../../components/LogInFooter.component';
import LogInForm from '../../components/LogInForm.component';
import LogInHeader from '../../components/LogInHeader.component';
import WelcomeText from '../../components/WelcomeText.component';
import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';
import {LogInBG} from '../../assets/images';
import FingerPrintModal from '../../components/FingerPrintModal/FingerPrintModal';

const Login = ({navigation}) => {
  const [fingerPrintBtn, setFingerPrintBtn] = useState(false);
  const [language, setLanguage] = useState('eng');
  const toggleDialog = () => setFingerPrintBtn(!fingerPrintBtn);

  return (
    <View style={styles.LogInContainer}>
      <ImageBackground source={LogInBG} resizeMode="cover" style={styles.img}>
        <StyledView darker={fingerPrintBtn}>
          <LogInHeader />
          <WelcomeText />
          <LogInForm modalToggle={toggleDialog} nav={navigation} />
          <LogInFooter />
        </StyledView>
        {fingerPrintBtn ? (
          <FingerPrintModal
            toggleDialog={toggleDialog}
            fingerPrintBtn={fingerPrintBtn}
            title="Log in with your fingerprint"
          />
        ) : null}
      </ImageBackground>
    </View>
  );
};

export default Login;
