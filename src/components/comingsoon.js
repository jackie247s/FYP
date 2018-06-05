import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ComingSoon extends Component {
  render() {
    const { containerStyle, textStyle, backgroundImage } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        {/* <View style={containerStyle}>
          <Text style={textStyle}>Coming Soon</Text>
        </View> */}
      </Image>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: '18'
  }
};

export default ComingSoon;
