import React from 'react';
import { Image, View, Text, ActivityIndicator,TouchableOpacity, Dimensions,Alert } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FormButton1 } from './Form';
const width = Dimensions.get('window').width;
const mar = width - 50;
class TermsConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.user
    };
  }
  AcquireMerchant() {
    Alert.alert(
      'Thank you for accepting the agreement!',
      'You will now be shifted to data collection process',
    );
    Actions.AcquireMerchant({ user: this.state.userId });
  }


  render() {
    const { backgroundImageStyle, containerStyle, textStyle, buttonStyle } = styles;
    return (
      <Image source={require('../images/bg.png')} style={backgroundImageStyle}>
        <View style={containerStyle}>
          <Text style={textStyle}>You must agree to the following terms and conditions:</Text>
          <Text style={textStyle}>
            1. The bank will keep 100% of the revenue made from the transaction
          </Text>
          <Text style={textStyle}>
            2. The bank will charge you Rs.50,000 per month on a subscription model for this service
          </Text>
          <Text style={textStyle}>
            3. The bank's authority is final.
            If it wishes, it can terminate your subscription without warning.
          </Text>
          <Button style={buttonStyle} rounded light onPress={this.AcquireMerchant.bind(this)}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>I Accept</Text>
          </Button>
        </View>
      </Image>
    );
}
}

const styles = {
  backgroundImageStyle: {
    flex: 1,
    height: null,
    width: null
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    paddingTop: 10
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle: {
    flexDirection: 'row',
    width: mar,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'

  },
};

export default TermsConditions;
