import React from 'react';
import { Button, Text } from 'native-base';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const mar = width - 50;

const RedButton = (props) => {
	return (
			<Button style={styles.buttonStyle} rounded light onPress={props.onPress}>
				<Text style={{ fontSize: 18, fontWeight: 'bold',color:'white' }}>{props.buttonText}</Text>
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
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
    backgroundColor:'#ca3947'

  }

};

export default RedButton;
