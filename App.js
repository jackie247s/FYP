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
import { Button} from 'native-base';
import HeaderComp from './src/components/header';
import InputBox from './src/components/inputbox';
import ButtonComp from './src/components/button';

import { Container, Header, Content, Item, Input } from 'native-base';


export default class App extends Component<{}> {
  render() {
    return (
      <Container>
        <HeaderComp headerText={'Login'} />
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Image style={styles.image} source={require('./src/images/logo1.png')}/>
         </View> 
          <View style={{marginLeft:10,marginRight:10}}>
            <InputBox placeholderText={'Name'} />
            <InputBox placeholderText={'Email'} />
            <InputBox placeholderText={'Password'} />
          </View>
          <ButtonComp buttonText={'SignUP'} />
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text>Already have an account?</Text>
               </View>
              <Button style={styles.buttonStyle} rounded danger><Text style={{fontWeight:"bold"}}>Sign In</Text></Button>
           
          </View>

        </Container>
      
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width:200,
    height:200
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

    marginLeft:80,
    padding: 15,
    
  },
  footer: {marginTop:10}

});
