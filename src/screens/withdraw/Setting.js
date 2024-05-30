import React from 'react';
import {View, SafeAreaView} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {resetAuth, resetPin} from '../../utils/Helper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import styles from './styles';

const Setting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  handelOnPress = send => {
    if (send === 'RESET_PIN') {
      resetPin();
      navigation.reset({
        index: 0,
        routes: [{name: 'PasscodeScreen'}],
      });
    }

    if (send === 'LOGOUT') {
      dispatch({type: 'LOGOUT'});
      resetAuth();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.settingsStyles.container}>
        <PrimaryButton
          texts={'RESET PIN'}
          onPress={() => handelOnPress('RESET_PIN')}
          height={40}
          width={'90%'}
          styles={styles.settingsStyles.buttonStyle}
        />
        <PrimaryButton
          texts={'LOGOUT'}
          onPress={() => handelOnPress('LOGOUT')}
          height={40}
          width={'90%'}
          styles={styles.settingsStyles.buttonStyle}
        />
      </View>
    </SafeAreaView>
  );
};
export default Setting;
