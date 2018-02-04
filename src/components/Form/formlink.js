import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';

const FormLink = (props) => {
  const { onPress, buttonText } = props;
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Icon style={{ color: '#fff' }} active name='md-attach' />
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 15
  }
};

export { FormLink };
