import React from 'react';
import { Image } from 'react-native';

const ProfileImage = (props) => <Image style={styles.imageStyle} source={{ uri: props.source }} />;

const styles = {
  imageStyle: {
    borderRadius: 5,
    height: 100,
    width: 100
  }
};

export default ProfileImage;
