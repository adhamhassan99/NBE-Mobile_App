import Geolocation from '@react-native-community/geolocation';
import {Platform, PermissionsAndroid} from 'react-native';
export async function getAtms() {
  const API_KEY = 'AIzaSyD9AFnqoZ5ffYUL9iOKqC-eX3_nu3kyT28';
  const res = await Geolocation.getCurrentPosition(success);
}
export async function requestPermissions() {
  if (Platform.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization('whenInUse');
    if (auth === 'granted') {
      // do something if granted...
    }
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
      getAtms();
    }
  }
}

function success(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}
