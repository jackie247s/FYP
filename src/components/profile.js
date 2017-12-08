import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Thumbnail, Button } from 'native-base';

class Profile extends Component {
  onButtonPress() {
    
  }

  render() {
    const { containerStyle } = styles;

    return (
      <View style={containerStyle}>
        <Thumbnail large source={{ uri: '../images/placeholder_profile_photo.png' }} />
        <Text>Ali Usman</Text>
        <Text>k142170@nu.edu.pk</Text>
        <Button rounded light onPress={this.onButtonPress.bind(this)}>
          <Text>Change Picture</Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20
  }
};

export default Profile;
