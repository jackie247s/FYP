import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';

const FormLink = ({ config }) => {
  const { onPress, buttonText } = config;
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}><Icon style={{ color: '#fff'}}name='md-attach' /> {buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 5
  },
  textStyle: {
    color: 'white',
    fontSize: 18
  }
};

export { FormLink };
