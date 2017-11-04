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
import Signup from './src/components/signup';
import NewPromotion from './src/components/newpromotion';
import { Container, Header, Content, Item, Input } from 'native-base';


export default class App extends Component<{}> {
  render() {
    return (
      <NewPromotion />
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
