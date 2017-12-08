import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Thumbnail, Button, Spinner } from 'native-base';
import firebase from '../firebase';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.userid,
      name: '',
      email: '',
      loading: true
    };
  }

  componentWillMount() {
    const userInfoRef = firebase.database().ref('merchants/' + this.state.userid);
    userInfoRef.on('value', snapshot => {
      console.log(snapshot.val());
      const children = snapshot.val();
      const userInfo = children[Object.keys(children)[0]];
      console.log(userInfo);
      const name = userInfo.Name;
      const email = userInfo.Email;
      const loading = false;
      this.setState({ name, email, loading });
    });
  }

  onButtonPress() {

  }

  renderProfile() {
    const { containerStyle, textStyle, buttonContainerStyle, buttonStyle } = styles;

    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <View style={containerStyle}>
        <Thumbnail large source={require('../images/placeholder_profile_photo.png')} />
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
