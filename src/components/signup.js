/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image
} from 'react-native';
import { Button } from 'native-base';
import HeaderComp from './header';
import InputBox from './inputbox';
import ButtonComp from './button';

import { Container, Header, Content, Item, Input } from 'native-base';


const Signup = () => {
    return (
      <Container>
        <HeaderComp headerText={'Hello World'} />
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Image style={styles.image} source={require('../images/alfalah-logo.png')}/>
         </View>
          <View style={{marginLeft:10,marginRight:10}}>
            <InputBox placeholderText={'Name'} />
            <InputBox placeholderText={'Email'} />
            <InputBox placeholderText={'Password'} />
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <ButtonComp buttonText={'SignUP'} />
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text>Already have an account?</Text>
               </View>
              <Button style={styles.buttonStyle} rounded danger><Text style={{fontWeight:"bold"}}>Sign In</Text></Button>

          </View>

        </Container>


    );
  }


const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width:170,
    height:170
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
   buttonStyle: {
    backgroundColor:'#fff',
    width:200,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    marginTop:10,
    marginLeft:80,
    padding: 15,

  },
  footer: {marginTop:10}

});
export default Signup;
