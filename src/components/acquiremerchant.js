import React, { Component } from 'react';
import { View, Image, ScrollView, Text, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Picker } from 'native-base';
import { RkAvoidKeyboard } from 'react-native-ui-kitten';
import firebase from '../firebase';
import { FormInput, FormButton1, FormPicker, FormValidator } from './Form';

class AcquireMerchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: props.user.uid,
      businesstype: '',
      businessname: '',
      location: '',
      address: '',
      landline: '',
      mobile: '',
      email: '',
      landmark: '',
      owner: '',
      hours: '',
      facebook: '',
      cnic: '',
      turnover: ''
    };
  }

  onButtonPress() {
    if (this.validateForm()) {
      this.pushMerchantData();
      const authorRef = firebase.database().ref(`authorized_merchants/${this.state.userid}`);
      authorRef.push({ authorized: false }).then(() => {
        const user = this.props.user;
        alert('Your data has been collected. Please upload the required documents.');
        Actions.AttachDocs({ user });
      });
    }
  }

  validateForm() {
    let formValidated = true;

    if (FormValidator.checkIfFieldEmpty(this.state)) {
      alert('Please fill out all the fields');
      formValidated = false;
    }

    if (!FormValidator.checkValidMobile(this.state.mobile)) {
      alert('Invalid Mobile No.');
      formValidated = false;
    }

    if (!FormValidator.checkValidEmail(this.state.email)) {
      alert('Invalid Email');
      formValidated = false;
    }

    return formValidated;
  }

  pushMerchantData() {
    const merchantData = this.state;
    const merchRef = firebase.database().ref(`merchant_data/${this.state.userid}`);
    merchRef.push(merchantData);
  }

  buildFormInputs() {
    const self = this;
    const ninputs = 12;

    const formInputs = Object.entries(self.state);
    // Remove user id prop
    formInputs.shift();
    // Remove businesstype props
    formInputs.shift();

    const placeholders = [
      'Name of Business',
      'Location',
      'Address',
      'Landline',
      'Mobile',
      'Email',
      'Nearest Landmark',
      'Owner',
      'Operating Hours',
      'Facebook Page Link',
      'NIC Number',
      'Turnover'
    ];

    const inputs = [];
    let value;
    let placeholder;

    for (let i = 0; i < ninputs; i++) {
      let prop = formInputs[i][0];
      value = formInputs[i][1];
      placeholder = placeholders[i];

      inputs.push({
        key: prop,
        value,
        placeholder,
        icon: 'md-person',
        onChangeText: (newvalue) => self.setState({ [prop]: newvalue })
      });
    }

    return inputs;
  }

  renderFormInputs() {
    const inputs = this.buildFormInputs();
    return inputs.map(input =>
      <FormInput
        key={input.key}
        value={input.value}
        placeholder={input.placeholder}
        icon={input.icon}
        onChangeText={input.onChangeText}
      />);
  }

  renderBusinessTypes() {
    const businessTypes = [
      'Food',
      'Fuel',
      'Fashion'
    ];

    return (
      <FormPicker
        selectedValue={this.state.businesstype}
        onValueChange={(itemValue) => this.setState({ businesstype: itemValue })}
      >
        <Picker.Item value="" label="Business Type" />
        {
          businessTypes.map(businessType =>
            <Picker.Item key={businessType} label={businessType} value={businessType} />)
        }
      </FormPicker>
    );
  }

  // TODO: The mobile number input field should display a keypad

  render() {
    const { backgroundImage, containerStyle, headerStyle } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        <ScrollView>
          <View style={containerStyle}>
            <RkAvoidKeyboard
              onStartShouldSetResponder={(e) => true}
              onResponderRelease={(e) => Keyboard.dismiss()}
            >
              <Text style={headerStyle}>Enter Merchant Info</Text>
              {this.renderBusinessTypes()}
              {this.renderFormInputs()}
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <FormButton1
                  buttonText='Register'
                  onPress={this.onButtonPress.bind(this)}
                />
              </View>
            </RkAvoidKeyboard>
          </View>
        </ScrollView>
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
    marginTop: 20,
    marginLeft: 10,
    paddingBottom: 30
  },
  headerStyle: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center'
  }
};

export default AcquireMerchant;
