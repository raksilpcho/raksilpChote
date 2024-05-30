import React, {useRef, useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PinInputFunc from '../../components/PinInputFunc';
import PinKeyboardFunc from '../../components/PinKeyBoardFunc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonStyles from './styles';

const PasscodeScreen = () => {
  const navigation = useNavigation();
  const pinInputRef = useRef();
  const [pin, setPin] = useState('');
  const [havePin, setHavePin] = useState(null);

  useEffect(() => {
    shouldSetPin();
  }, []);

  const handleKeyPress = key => {
    setPin(prevPin => {
      if (key === 'C') {
        return prevPin.slice(0, -1);
      } else if (prevPin.length < 6) {
        return prevPin + key;
      }
      return prevPin;
    });
  };

  const shouldSetPin = async store => {
    const storePhone = await AsyncStorage.getItem('@phone');
    const storedPin = await AsyncStorage.getItem('@pin');
    if (storePhone && storedPin) {
      setHavePin(storedPin);
    }

    if (store) {
      await AsyncStorage.setItem('@pin', store);
      navigation.reset({
        index: 0,
        routes: [{name: 'TabHome'}],
      });
    }
  };

  useEffect(() => {
    if (pin.length === 6) {
      if (havePin && pin === havePin) {
        navigation.navigate('TabHome');
      } else if (!havePin) {
        shouldSetPin(pin);
      } else {
        if (pinInputRef.current) {
          pinInputRef.current.shake();
          setPin('');
        }
      }
    }
  }, [pin]);

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={commonStyles.passcodeScreenContainer}>
        <View style={commonStyles.passcodeScreenTextContainer}>
          <Text style={commonStyles.passcodeScreenText}>
            {havePin ? 'Input you PIN' : 'Setup PIN'}
          </Text>
        </View>
        <View style={commonStyles.passcodeScreenTextContainer}>
          <PinInputFunc
            ref={pinInputRef}
            onRef={ref => (pinInputRef.current = ref)}
            numberOfPins={6}
            numberOfPinsActive={pin.length}
            vibration={true}
            containerStyle={commonStyles.pinContainer}
            pinStyle={commonStyles.pin}
            pinActiveStyle={commonStyles.pinActive}
          />
        </View>
        <PinKeyboardFunc onKeyPress={handleKeyPress} />
      </View>
    </SafeAreaView>
  );
};

export default PasscodeScreen;
