import React, { Component } from 'react';
import { View } from 'react-native';
import FormInput from './Form/forminput';

class AcquireMerchant extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    return (
      <View>
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
      </View>
    );
  }
}

export default AcquireMerchant;