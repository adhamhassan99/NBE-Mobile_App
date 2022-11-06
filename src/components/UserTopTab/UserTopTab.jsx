import {
  View,
  Text,
  Button,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {BurgerMenu} from '../../assets/images';
import FingerPrintModal from '../FingerPrintModal/FingerPrintModal';

import {
  Col,
  BurgerMenuImage,
  ColSingle,
  NotifBtn,
  ProfileImage,
  TopBarContainer,
  Username,
} from './UserTopTab.styles';

const UserTopTab = ({user, day = false}) => {
  const [fingerPrintBtn, setFingerPrintBtn] = useState(false);
  const toggleDialog = () => setFingerPrintBtn(!fingerPrintBtn);
  return (
    <TopBarContainer>
      <Col>
        <BurgerMenuImage source={BurgerMenu} />
        <TouchableOpacity />
        <ProfileImage source={require('../../assets/images/profilepic.jpeg')} />
        <View>
          <Username>{day ? 'Good Morning' : 'Good Evening'}</Username>
          <Username bold>{user}</Username>
        </View>
      </Col>
      <ColSingle single>
        <TouchableOpacity onPress={() => console.log('h')}>
          <NotifBtn icon={require('../../assets/images/BellIcon.png')} />
        </TouchableOpacity>
      </ColSingle>
      {/* {fingerPrintBtn ? (
        <View>
          <FingerPrintModal
            toggleDialog={toggleDialog}
            fingerPrintBtn={fingerPrintBtn}
            title="Show balance with your fingerprint"
          />
        </View>
      ) : null} */}
    </TopBarContainer>
  );
};

export default UserTopTab;
