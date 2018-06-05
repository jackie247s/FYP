/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Routes from './src';


export default class App extends Component<{}> {
  render() {
  	console.disableYellowBox = true;
    console.warn('YellowBox is disabled.');
    return (
      <Routes />
    );
  }
}
