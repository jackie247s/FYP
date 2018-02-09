import React, { Component } from 'react';
import { View, Image, ScrollView, Text, Alert } from 'react-native';
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
      this.pushAuthorObject();
    }
  }

  pushAuthorObject() {
    const authorRef = firebase.database().ref(`authorized_merchants/${this.state.userid}`);
    authorRef.push({ authorized: false }).then(() => {
      const user = this.props.user;
      Alert.alert('Your data has been collected. Please upload the required documents.');
      Actions.AttachDocs({ user });
    });
  }

  validateForm() {
    let formValidated = true;

    if (FormValidator.checkIfFieldEmpty(this.state)) {
      Alert.alert('Please fill out all the fields');
      formValidated = false;
    }

    if (!FormValidator.checkValidMobile(this.state.mobile)) {
      Alert.alert('Invalid Mobile No.');
      formValidated = false;
    }

    if (!FormValidator.checkValidEmail(this.state.email)) {
      Alert.alert('Invalid Email');
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

    const placeholders = [
      'Business Type',
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
    let input;

    for (let i = 0; i < ninputs; i++) {
      const prop = formInputs[i][0];
      value = formInputs[i][1];
      placeholder = placeholders[i];

      input = {
        key: prop,
        value,
        placeholder,
        icon: 'md-person',
        onChangeText: (newvalue) => self.setState({ [prop]: newvalue }),
        keyboardType: 'default'
      };

      if (placeholder === 'Mobile' || placeholder === 'Landline') {
        input.keyboardType = 'phone-pad';
      }

      if (placeholder === 'Email') {
        input.keyboardType = 'email-address';
      }

      if (placeholder === 'NIC Number') {
        input.keyboardType = 'numeric';
      }

      inputs.push(input);
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
        keyboardType={input.keyboardType}
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

  render() {
    const { backgroundImage, containerStyle, headerStyle } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        <ScrollView
          keyboardShouldPersistTaps="always"
        >
          <View style={containerStyle}>
            <Text style={headerStyle}>Enter Merchant Info</Text>
            <RkAvoidKeyboard>
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
