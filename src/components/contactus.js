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
    // const subject = this.state.subject;
    // const message = this.state.message;
    //
    // const ref = firebase().database()
  }

  render() {
    const { backgroundStyle, containerStyle, buttonContainerStyle } = styles;
    return (
      <Image source={require('../images/bg.png')} style={backgroundStyle} >
        <View style={containerStyle}>
          <FormInput
            value={this.state.subject}
            placeholder="Subject"
            onChangeText={subject => this.setState({ subject })}
          />
          <FormTextBox
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
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

export default ContactUs;
