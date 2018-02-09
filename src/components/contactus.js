import React, { Component } from 'react';
import { Image, View, Alert } from 'react-native';
import { RkAvoidKeyboard } from 'react-native-ui-kitten';
import { FormInput, FormTextBox, FormButton1 } from './Form';
import firebase from '../firebase';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: props.userid,
      subject: '',
      message: ''
    };
  }

  onButtonPress() {
    const subject = this.state.subject;
    const message = this.state.message;
    const formValid = this.validateForm(subject, message);
    
    if (formValid) {
      const UID = this.state.userid;
      firebase.database().ref('Merchant_Messages/' + UID).set({
        Subject: subject,
        Message: message
      });
      Alert.alert(
        'Thank you for contacting us!',
        'You will receive a reply on your email address.'
      );
    }
  }

  validateForm(subject, message) {
    let formValid = true;
    if (subject == null && message == null) {
      Alert.alert(
        'Error',
        'Please fill all fileds!'
      );
      formValid = false;
    }
    else if (subject == null) {
      Alert.alert(
        'Error',
        'Please write subject!'
      );
      formValid = false;
    }
    else if (message == null) {
      Alert.alert(
        'Error',
        'Please write mesaages!'
      );
      formValid = false;
    }

    return formValid;
  }

  render() {
    const {
      backgroundStyle,
      containerStyle,
      logoContainerStyle,
      logoStyle,
      buttonContainerStyle
      } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundStyle} >
        <View style={containerStyle}>
          <View style={logoContainerStyle}>
            <Image source={require('../images/logo.png')} style={logoStyle} />
          </View>
          <RkAvoidKeyboard>
            <FormInput
              icon="ios-book"
              placeholder="Subject"
              onChangeText={(subject) => this.setState({ subject })}
            />
            <FormTextBox
              icon="md-mail"
              placeholder="Message"
              onChangeText={(message) => this.setState({ message })}
            />
            <View style={buttonContainerStyle}>
              <FormButton1
                buttonText="Submit"
                onPress={this.onButtonPress.bind(this)}
              />
            </View>
          </RkAvoidKeyboard>
        </View>
      </Image>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    height: null,
    width: null
  },
  containerStyle: {
    marginTop: 30
  },
  logoContainerStyle: {
    alignItems: 'center'
  },
  logoStyle: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

export default ContactUs;
