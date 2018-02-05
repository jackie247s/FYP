import React from 'react';
import { Image, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FormButton1 } from './Form';

const TermsConditions = (props) => {
  const { buttonContainerStyle, backgroundImageStyle, containerStyle, textStyle } = styles;
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
        <View style={buttonContainerStyle}>
          <FormButton1
            buttonText="I Accept"
            onPress={() => { Actions.AcquireMerchant({ user: props.user }); }}
          />
        </View>
      </View>
    </Image>
  );
};

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
  }
};

export default TermsConditions;
