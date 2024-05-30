import React, {useState, useEffect} from 'react';
import SignIn from './auth/SignIn';
import PasscodeScreen from './auth/PasscodeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {
  const [screen, setScreen] = useState('SignIn');

  useEffect(() => {
    haveSignIn();
  });

  const haveSignIn = async () => {
    const storePin = await AsyncStorage.getItem('@pin');
    const storeToken = await AsyncStorage.getItem('@token');
    const storePhone = await AsyncStorage.getItem('@phone');

    if (storePin === null && storeToken === null && storePhone === null) {
    } else {
      setScreen('PasscodeScreen');
      if (storePin === null) {
        setScreen('PasscodeScreen');
      }
    }
  };

  return (
    <>
      {screen === 'SignIn' && <SignIn />}
      {screen === 'PasscodeScreen' && <PasscodeScreen />}
    </>
  );
};
export default MainScreen;
