import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import OTPInput from '../../components/OTPInput';
import {useNavigation} from '@react-navigation/native'
import {generateOTP} from '../../utils/Helper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import commonStyles from './styles';


const OTPScreen = () => {
    const [getOtp,setGetotp] = useState('')
    const [otp, setOtp] = useState('');
    const navigation = useNavigation()

    useEffect(()=>{
        callOTP()
    },[])

    const handleChangeOTP = otp => {
      setOtp(otp);
      if (otp?.length === 6) {
        if (otp === getOtp) {
        navigation.navigate('PasscodeScreen');
        }
      }
    };

    const callOTP = () => {
        const getOTP = generateOTP()
        setGetotp(getOTP)
        alert(getOTP)
    }

    return (
        <View style={commonStyles.otpContainer}>
            <Text style={commonStyles.otpTitle}>Enter OTP</Text>
            <OTPInput length={6} onChangeOTP={handleChangeOTP} getOtp={getOtp} />
            <TouchableOpacity onPress={()=> callOTP()}>
                <Text style={[commonStyles.otpText,{color:"blue"}]}> resend OTP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OTPScreen;
