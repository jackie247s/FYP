import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';
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
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
          <Text style={styles.TextStyle}>Add Your Products</Text>
         </View>
          <InputBox placeholderText={'Product Name'} Icon={'md-create'} />
          <InputBox placeholderText={'Product Description'}  Icon={'md-document'} />
          {/* Change to Dropdown */}
          <InputBox placeholderText={'Promotion Type'}  Icon={'md-options'} />
          <InputBox placeholderText={'Discount'}  Icon={'md-pricetag'} />
          <InputBox placeholderText={'Duration'}  Icon={'md-calendar'}/>
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
    marginTop:30
  },
  image: {
    width:120,
    height:120
  },
  TextStyle:{
    fontSize:28,
    fontWeight:"bold",
    color:'#d9534f'
  }
};

export default NewPromotion;
