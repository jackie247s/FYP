import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import { Header } from './header';

const Profile = () => {
  return (
    <Container>
      <Header headerText={'Profile'} />
    </Container>
  );
};

export default Profile;
