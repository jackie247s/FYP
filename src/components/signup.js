/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Button, Container } from 'native-base';
import HeaderComp from './header';
import InputBox from './inputbox';
import RedButton from './redbutton';


const Signup = () => {
    return (
      <Image source={require('../images/bg.png')} style={styles.backgroundImage}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
          <Image style={styles.image} source={require('../images/logo.png')} />
         </View>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <InputBox placeholderText={'Name'} Icon={'md-person'}/>
            <InputBox placeholderText={'Email'} Icon={'md-mail'} />
            <InputBox placeholderText={'Password'} Icon={'md-unlock'} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
            <RedButton buttonText={'Sign Up'} />
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text style={{color:'#dbd8d8'}}>Already have an account?</Text>
            </View>
            <Button style={styles.buttonStyle} rounded transparent>
              <Text style={{ fontWeight: 'bold',color:'#fff',fontSize:20 }} >Sign In</Text>
            </Button>
          </View>
      </Image>


    );
  };


const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: 150,
    height: 150,
    marginTop:20
  },
  backgroundImage: {
    flex: 1,
    width:null,
    height:null
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
   buttonStyle: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginTop: 10,
    marginLeft: 80,
    padding: 15,
  },
  footer: {
    marginTop: 10
  }

});
export default Signup;
