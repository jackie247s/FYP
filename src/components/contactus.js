import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { FormInput, FormTextBox, FormButton1 } from './Form';

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
    this.setState({
      subject: '',
      message: ''
    });
    alert('Message sent');
  }

  render() {
    const { backgroundStyle, containerStyle, logoContainerStyle, logoStyle, buttonContainerStyle } = styles;
    return (
      <Image source={require('../images/bg.png')} style={backgroundStyle} >
        <View style={containerStyle}>
          <View style={logoContainerStyle}>
            <Image source={require('../images/logo.png')} style={logoStyle} />
          </View>
          <FormInput
            icon="md-help"
            value={this.state.subject}
            placeholder="Subject"
            onChangeText={subject => this.setState({ subject })}
          />
          <FormTextBox
            icon="md-mail"
            value={this.state.message}
            placeholder="Message"
            onChangeText={message => this.setState({ message })}
          />
          <View style={buttonContainerStyle}>
            <FormButton1
              buttonText="Submit"
              onPress={this.onButtonPress.bind(this)}
            />
          </View>
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
