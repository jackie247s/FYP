import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import HeaderComp from './header';
import ButtonComp from './button';
import InputBox from './inputbox';
import Screen from './screen';

class NewPromotion extends Component {
  render() {
    const { buttonContainerStyle } = styles;

    return (
      
       // <HeaderComp headerText={'Add Promotion'} />
        <View>
          <InputBox placeholderText={'Product Name'} Icon={'md-create'} />
          <InputBox placeholderText={'Product Description'} />
          {/* Change to Dropdown */}
          <InputBox placeholderText={'Promotion Type'} />
          <InputBox placeholderText={'Discount'} />
          <InputBox placeholderText={'Duration'} />
          <View style={buttonContainerStyle}>
            <ButtonComp buttonText={'Submit'} />
          </View>
        </View>
     
    );
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  }
};

export default NewPromotion;
