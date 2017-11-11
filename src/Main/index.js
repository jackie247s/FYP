import React, { Component } from 'react';
import {View,Text,Image,Dimensions} from 'react-native';
import Display from 'react-native-display';
import * as Animatable from 'react-native-animatable';
import Popup from './popup';


const {width, height} = Dimensions.get('window');


class MainScreen extends React.Component{

constructor(props) {
    super(props);

    this.state = {enable: true};
  }


	render(){
		return(
			
  			<Image source={require('../images/bg.png')} style={{flex: 1,width:null,height:null}}>
             <Display  enable={this.state.enable} 
              enterDuration={5000} 
              exitDuration={500}
              exit="fadeOutLeft"
              enter="fadeInLeft">
               <Animatable.View   animation="zoomInUp"><Popup /></Animatable.View>
            </Display>
        </Image>
      
			);
	}
}

export default MainScreen;