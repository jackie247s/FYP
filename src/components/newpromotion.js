import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import HeaderComp from './header';
import ButtonComp from './button';
import InputBox from './inputbox';

class NewPromotion extends Component{
  render(){
    const { inputContainerStyle, buttonContainerStyle } = styles;

    return (
      <Container>
        <HeaderComp headerText={"Add Promotion"}/>
        <View style={inputContainerStyle}>
          <InputBox placeholderText={"Product Name"}/>
          <InputBox placeholderText={"Product Description"}/>
          {/* Change to Dropdown */}
          <InputBox placeholderText={"Promotion Type"}/>
          <InputBox placeholderText={"Discount"}/>
          <InputBox placeholderText={"Duration"}/>
          <View style={buttonContainerStyle}>
            <ButtonComp buttonText={"Submit"} />
          </View>
        </View>
      </Container>
    );
  }
}

const styles ={
  inputContainerStyle : {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  }
}

export default NewPromotion;
