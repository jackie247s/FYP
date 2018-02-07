import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Spinner } from 'native-base';
import firebase from '../firebase';
import ProfileImage from './Profile/ProfileImage';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.userid,
      name: '',
      email: '',
      image: '',
      loadingInfo: true,
      loadingImage: true
    };
  }

  componentWillMount() {
    this.getUserInfo();
    this.getProfileImage();
  }

  onButtonPress() {

  }

  getUserInfo() {
    //Get userinfo from firebase Realtime Database
    const userInfoRef = firebase.database().ref(`merchants/${this.state.userid}`);
    userInfoRef.once('value', snapshot => {
      const children = snapshot.val();
      const userInfo = children[Object.keys(children)[0]];
      const name = userInfo.Name;
      const email = userInfo.Email;
      this.setState({ name, email, loadingInfo: false });
    });
  }

  getProfileImage() {
    this.setState({ loadingImage: true });

    const onResolve = (foundURL) => {
      this.setState({ image: foundURL, loadingImage: false });
    };

    const onReject = (error) => {
      firebase.storage().ref('images/placeholder_profile_photo.png').getDownloadURL()
      .then(url => {
        this.setState({ image: url, loadingImage: false });
      });
    };

    firebase.storage().ref(`image/${this.state.userid}/me.jpg`).getDownloadURL()
    .then(onResolve, onReject);
  }

  setProfileImage(image) {
    const profileImageRef = firebase.storage().ref(`images/${this.state.userid}/me.jpg`);
    profileImageRef.put(image)
    .then(() => { this.getProfileImage(); });
  }

  renderImage() {
    if (this.state.loadingImage) {
      return (
        <View>
          <Spinner />
          <Text> Image Loading </Text>
        </View>
      );
    }

    return (
      <ProfileImage
        source={this.state.image}
      />
    );
  }

  // TODO: Redesign Page for better feel
  // TODO: Add functionality for updating data

  renderProfile() {
    const {
      containerStyle,
      imageContainerStyle,
      textStyle,
      buttonContainerStyle,
      buttonStyle
    } = styles;
    let elRender;

    if (this.state.loadingInfo) {
      elRender = <Spinner />;
    } else {
      elRender = (
        <View style={containerStyle}>
          <View style={imageContainerStyle}>
            {this.renderImage()}
          </View>
          <Text style={textStyle}>{this.state.name}</Text>
          <Text style={textStyle}>{this.state.email}</Text>
          <View style={buttonContainerStyle}>
            <Button style={buttonStyle} rounded light onPress={this.onButtonPress.bind(this)}>
              <Text>Change Picture</Text>
            </Button>
          </View>
        </View>
      );
    }

    return elRender;
  }

  render() {
    const { containerStyle } = styles;

    return (
      <View style={containerStyle}>
        {this.renderProfile()}
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
  imageContainerStyle: {
    marginBottom: 10
  },
  textStyle: {
    marginTop: 10
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
