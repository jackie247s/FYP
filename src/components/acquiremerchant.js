import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RkAvoidKeyboard } from 'react-native-ui-kitten';
import firebase from '../firebase';
import { FormInput, FormButton1, FormValidator } from './Form';

class AcquireMerchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: props.user.uid,
      businessname: '',
      location: '',
      address: '',
      landline: '',
      mobile: '',
      email: '',
      landmark: '',
      owner: '',
      businesstype: '',
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
        Actions.AttachDocs({ user });
      });
    }
  }

  validateForm() {
    return !FormValidator.checkIfFieldEmpty.call(this);
  }

  checkIfFieldEmpty() {
    const entries = Object.entries(this.state);
    for (let i = 0; i < entries.length; i++) {
      const prop = entries[i][1];
      console.log(prop);
      if (prop === '') {
        alert('Please fill out all the fields');
        return true;
      }
    }
    return false;
  }

  pushMerchantData() {
    const merchantData = this.state;
    const merchRef = firebase.database().ref('merchant_data/' + this.state.userid);
    merchRef.push(merchantData);
  }

  render() {
    const { backgroundImage, containerStyle } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        <ScrollView>
          <View style={containerStyle}>
            <RkAvoidKeyboard>
              <FormInput
                value={this.state.businessname}
                placeholder='Name of Business'
                icon='md-person'
                onChangeText={(businessname) => this.setState({ businessname })}
              />
              <FormInput
                value={this.state.location}
                placeholder='Location'
                icon='md-person'
                onChangeText={(location) => this.setState({ location })}
              />
              <FormInput
                value={this.state.address}
                placeholder='Address'
                icon='md-person'
                onChangeText={(address) => this.setState({ address })}
              />
              <FormInput
                value={this.state.landline}
                placeholder='Landline'
                icon='md-person'
                onChangeText={(landline) => this.setState({ landline })}
              />
              <FormInput
                value={this.state.mobile}
                placeholder='Mobile'
                icon='md-person'
                onChangeText={(mobile) => this.setState({ mobile })}
              />
              <FormInput
                value={this.state.email}
                placeholder='Email'
                icon='md-person'
                onChangeText={(email) => this.setState({ email })}
              />
              <FormInput
                value={this.state.landmark}
                placeholder='Nearest Landmark'
                icon='md-person'
                onChangeText={(landmark) => this.setState({ landmark })}
              />
              <FormInput
                value={this.state.owner}
                placeholder='Owner'
                icon='md-person'
                onChangeText={(owner) => this.setState({ owner })}
              />
              <FormInput
                value={this.state.businesstype}
                placeholder='Type of Business'
                icon='md-person'
                onChangeText={(businesstype) => this.setState({ businesstype })}
              />
              <FormInput
                value={this.state.hours}
                placeholder='Operating Hours'
                icon='md-mail'
                onChangeText={(hours) => this.setState({ hours })}
              />
              <FormInput
                value={this.state.facebook}
                placeholder='Facebook Page Link'
                icon='md-mail'
                onChangeText={(facebook) => this.setState({ facebook })}
              />
              <FormInput
                value={this.state.cnic}
                placeholder='NIC Number'
                icon='md-mail'
                onChangeText={(cnic) => this.setState({ cnic })}
              />
              <FormInput
                value={this.state.turnover}
                placeholder='Turnover'
                icon='md-unlock'
                onChangeText={(turnover) => this.setState({ turnover })}
              />
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
  }
};

export default AcquireMerchant;
