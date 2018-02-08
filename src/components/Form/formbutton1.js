import React from 'react';
import { Text, Dimensions } from 'react-native';
import { Button } from 'native-base';

const width = Dimensions.get('window').width;
const mar = width - 50;

const FormButton1 = (props) => {
  const { onPress, buttonText } = props;
  return (
    <Button style={styles.buttonStyle} rounded light onPress={onPress}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{buttonText}</Text>
    </Button>
  );
};

const styles = {
  buttonStyle: {
    flexDirection: 'row',
    width: mar,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
  }
};

export { FormButton1 };
