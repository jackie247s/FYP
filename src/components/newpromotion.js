import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';
import { Container } from 'native-base';
import HeaderComp from './header';
import RedButton from './redbutton';
import InputBox from './inputbox';
import Screen from './screen';
import DatePicker from 'react-native-datepicker'
import {Label} from 'native-base';
class NewPromotion extends Component {
  render() {
    const { buttonContainerStyle,backgroundImage } = styles;

    return (
       // <HeaderComp headerText={'Add Promotion'} />
        <Image source={require('../images/bg.png')} style={backgroundImage}>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                <Text style={styles.TextStyle}>Add Your Products</Text>
            </View>
            <InputBox placeholderText={'Product Name'} Icon={'md-create'} />
                <InputBox placeholderText={'Product Description'}  Icon={'md-document'} />
                {/* Change to Dropdown */}
                <InputBox placeholderText={'Promotion Type'}  Icon={'md-options'} />
                <InputBox placeholderText={'Discount'}  Icon={'md-pricetag'} />
                <Label style={{margin:5,marginLeft:50,color:'#dbd8d8'}}>Start date</Label>
                <DatePicker
                  style={{width: 300,borderWidth:0}}
                  date="2016-05-15"
                  mode="date"
                  pplaceholderText="select date"
                  format="YYYY-MM-DD"
                 minDate="2017-06-08"
                  maxDate="2020-06-08"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles=
                  {{
                    dateIcon:
                     {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 15
                     },
                    dateInput: 
                     {
                       marginLeft: 50
                     }
                    
                  }}
                  ///onDateChange={(date) => {this.setState({date: date})}}
                />
          <Label style={{margin:5,marginLeft:50,color:'#dbd8d8'}}>End date</Label>
              <DatePicker
                style={{width: 300,borderWidth:0}}
                date="2016-05-15"
                mode="date"
                pplaceholderText="select date"
                format="YYYY-MM-DD"
               minDate="2017-06-08"
                maxDate="2020-06-08"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 15
                  },
                  dateInput: {
                    marginLeft: 50
                  }
                  
                }}
                ///onDateChange={(date) => {this.setState({date: date})}}
              />
          <View style={buttonContainerStyle}>
              <RedButton buttonText={'Submit'} />
          </View>
        </Image>
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
  backgroundImage: {
    flex: 1,
    width:null,
    height:null
  },
  TextStyle:{
    fontSize:28,
    fontWeight:"bold",
    color:'#fff'
  }
};

export default NewPromotion;
