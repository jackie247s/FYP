import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from '../firebase';
import { FormButton1, FormValidator, FormLink } from './Form';

class AttachDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: props.user.uid,
      cnicImage: ''
    };
  }

  onButtonPress() {

  }

  onFormSubmit() {
    if (this.validateForm()) {
      // this.pushDocs();
      alert('Your documents have been uploaded. Please wait until an administrator has authorized you to use the app');
      // Actions.PleaseWait();
    }
  }

  pushDocs() {
    const ref = firebase.storage().ref(`merchantDocImages/${this.props.uid}`);
    const entries = Object.entries(this.state);
    let image;
    for (let i = 0; i < entries.length; i++) {
      image = entries[i][1];
      ref.put(image);
    }
  }

  validateForm() {
    let formValidated = true;

    if (!FormValidator.checkIfFieldEmpty(this.state)) {
      alert('Please fill out all the fields');
      formValidated = false;
    }

    return formValidated;
  }

  renderLinks() {
    const configArr = [
      {
        key: 1,
        onPress: this.onButtonPress.bind(this),
        buttonText: 'Attach CNIC'
      },
      {
        key: 2,
        onPress: this.onButtonPress.bind(this),
        buttonText: 'Attach Domain'
      }
    ];

    return configArr.map(
      config => <FormLink
        key={config.key}
        onPress={config.onPress}
        buttonText={config.buttonText}
      />
    );
  }

  render() {
    const { backgroundImage, containerStyle } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        <View style={containerStyle}>
          {this.renderLinks()}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <FormButton1
              buttonText='Submit'
              onPress={this.onFormSubmit.bind(this)}
            />
          </View>
        </View>
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
    marginTop: 120
  }
};

export default AttachDocs;
