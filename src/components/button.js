import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const mar=width-50;
const ButtonComp = (props) =>{
	return(
		 <Button style={styles.buttonStyle} rounded danger><Text>{props.buttonText}</Text></Button>

		 );
}

const styles = {
  buttonStyle: {	
    width:mar,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginLeft:mar-280,
    marginTop:20,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
  
};

export default ButtonComp;