import React from 'react';
import { View, Text, Image } from 'react-native';

const PleaseWait = () => {
  const { backgroundImage, containerStyle, textStyle } = styles;
  return (
    <Image source={require('../images/bg.png')} style={backgroundImage}>
      <View style={containerStyle}>
        <Text style={textStyle}>You are not authorized to access the app yet.</Text>
        <Text style={textStyle}>
          Please contact the following number to check your authorization progress:
        </Text>
        <Text style={textStyle}>090078601</Text>
      </View>
    </Image>
  );
};

const styles = {
  backgroundImage: {
    flex: 1,
    height: null,
    width: null
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  }
};

export default PleaseWait;
