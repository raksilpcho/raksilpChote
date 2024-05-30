import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = ({ length, onChangeOTP, getOtp }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputs = useRef([]);

    const handleChangeText = (text, index) => {
        if (index <= 5) {
          const newOtp = [...otp];
          newOtp[index] = text;
          setOtp(newOtp);

          if (text.length === 1 && index < length - 1) {
            inputs.current[index + 1].focus();
          }

          if (newOtp.join('').length === 6 && getOtp !== newOtp.join('')) {
            newOtp.length = 0
            newOtp.push(...new Array(6).fill(''))
          } else {
            onChangeOTP(newOtp.join(''));
          }
          

        } 
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            {otp.map((digit, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    value={digit}
                    onChangeText={(text) => handleChangeText(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(ref) => (inputs.current[index] = ref)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        margin: 5,
        textAlign: 'center',
        fontSize: 18,
        width: 40,
        height: 50,
    },
});

export default OTPInput;
