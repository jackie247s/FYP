import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from '../firebase';
import { FormInput, FormButton1 } from './Form';

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
    const authorRef = firebase.database().ref('authorized_merchants/' + this.state.userid);
    authorRef.push({ authorized: false }).then(() => {
      alert('Your data has been collected. Please wait until an administrator has authorized you to use the app');
      Actions.PleaseWait();
    });
  }

  render() {
    const { backgroundImage, containerStyle } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        <ScrollView>
          <View style={containerStyle}>
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
