import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Thumbnail, Button } from 'native-base';

class Profile extends Component {
  onButtonPress() {

  }

  render() {
    const { containerStyle, textStyle, buttonContainerStyle, buttonStyle } = styles;

    return (
      <View style={containerStyle}>
        <Thumbnail large source={require('../images/placeholder_profile_photo.png')} />
        <Text style={textStyle}>Ali Usman</Text>
        <Text style={textStyle}>k142170@nu.edu.pk</Text>
        <View style={buttonContainerStyle}>
          <Button style={buttonStyle} rounded light onPress={this.onButtonPress.bind(this)}>
            <Text>Change Picture</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    marginTop: 15
  },
  textStyle: {
    marginTop: 5
  },
  buttonContainerStyle: {
    alignItems: 'center',
    marginTop: 15
  },
  buttonStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default Profile;
