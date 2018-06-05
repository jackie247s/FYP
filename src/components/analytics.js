/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert
} from 'react-native';
import { Button,Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { RkAvoidKeyboard,RkButton,RkText } from 'react-native-ui-kitten';
import { FormInput } from './Form';
import firebase from '../firebase';

const width = Dimensions.get('window').width;
const mar = width - 50;

class Analytics extends Component {

  render() {
    console.disableYellowBox = true;
    return (
      <Image source={require('../images/addp1.jpg')} style={styles.backgroundImage}>
        
          <Text style={{fontSize:24,marginTop:10,alignSelf:'center',color:'white'}}>CATEGORY FOOD</Text>
          <View style={{justifyContent:'center',marginTop:30}}>
          <Item>
            <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginTop:30}}>No of Customers: 200</Text>
            
          </Item>
          <Item>
            <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginTop:30}}>No of predicted transactions for next month:45</Text>
            
          </Item>
          <Item>
            <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginTop:30}}>No of predicted transactions for merchant account: 55</Text>
            
          </Item>
        </View>
      </Image>
    );
  }
}


const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: 150,
    height: 150,
    marginTop: 20
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },

});

export default Analytics;
