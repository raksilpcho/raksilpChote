import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/auth/action';
import commonStyles from './styles';
import Loading from '../../components/Loading';


const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state)
  const userAuth = auth?.auth?.loginReducer?.data;
  const loading = auth?.auth?.loginReducer?.loading;
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = text => {
    const formattedNumber = text.replace(/\D/g, '');
    setPhoneNumber(formattedNumber);
  };

  const handleBlur = () => {
    if (phoneNumber.length < 10) {
      alert('Please enter a valid phone number (at least 10 digits)');
    }
  };

  const handlerSubmit = async () => {
    const loginCall = await dispatch(login(phoneNumber));
  };

  useEffect(() => {
    if (userAuth) {
      navigation.navigate('OTPScreen');
    }
  }, [auth]);

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={commonStyles.container}>
        <View style={commonStyles.centerContainer}>
          <View
            style={{
              backgroundColor: '#d9d9d9',
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}></View>
        </View>
        <View style={commonStyles.textContainer}>
          <Text style={commonStyles.signIntext}>PHONE NUMBER</Text>
          <CustomTextInput
            width={'90%'}
            height={40}
            borderColor="#d9d9d9"
            borderWidth={2}
            placeholder="Enter your name"
            keyboardType="numeric"
            onChangeText={text => handleInputChange(text)}
            maxLength={10}
          />
          <PrimaryButton
            texts={'Login'}
            onPress={() => {
              handlerSubmit();
            }}
            height={40}
            width={'50%'}
            buttonColor={'#d9d9d9'}
            styles={commonStyles.buttonContainer}
          />
        </View>
      </View>
      {loading && (<Loading/>)}
    </SafeAreaView>
  );
};
export default SignIn;
