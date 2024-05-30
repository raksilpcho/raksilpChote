import React from 'react';
import {View, TextInput} from 'react-native';

const CustomPhoneNumberInput = ({
  width,
  height,
  borderColor,
  borderWidth,
  ...props
}) => {
  return (
    <View
      style={{
        width,
        height,
        borderWidth,
        borderColor: borderColor ? borderColor : '#DDDDDD',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 10,
      }}>
      <TextInput {...props} />
    </View>
  );
};

export default CustomPhoneNumberInput;
