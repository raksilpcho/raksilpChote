import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const PrimaryButton = ({
  styles,
  texts,
  textColor,
  onPress,
  buttonColor,
  activeOpacity,
  borderWidth,
  borderColor,
  isIcon,
  iconName,
  textStyle,
  height,
  width,
}) => {
  const containerStyles = {
    padding: 10,
    backgroundColor: buttonColor ? buttonColor : 'white',
    width: width ? width : '100%',
    height: height ? height : 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: borderWidth ? borderWidth : 0,
    borderColor: borderColor ? borderColor : '',
    flexDirection: 'row',
    ...styles,
  };

  if (activeOpacity) {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: buttonColor ? buttonColor : 'white',
          width: '100%',
          height: 60,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.5,
        }}>
        <Text
          textAlign={'center'}
          lineHeight={21.09}
          fontWeight={500}
          color={textColor ? textColor : 'white'}
          fontSize={18}>
          {texts}
        </Text>
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={containerStyles} onPress={onPress}>
        {isIcon ? IconSelect(iconName) : null}
        <Text
          textAlign={'center'}
          fontWeight={500}
          color={textColor ? textColor : 'white'}
          fontSize={18}
          textTransform={textStyle ? textStyle : 'capitalize'}>
          {texts}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default PrimaryButton;
