import React from 'react';
import { View, Text } from 'react-native';
import { Container, Button } from 'native-base';
import { Header } from './header';
import { RedButton } from './redbutton';

const Profile = () => {
  const { containerStyle, textStyle, buttonContainerStyle } = styles;

  return (
    <Container>
      <View style={containerStyle}>
        <Text style={textStyle}>Company Name</Text>
        <Text style={textStyle}>Category</Text>
        <RedButton buttonText={'Change Password'} />
        <View style={buttonContainerStyle}>

        </View>
      </View>
    </Container>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonContainerStyle:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 25,
    marginTop: 20
  }
};

export default Profile;
