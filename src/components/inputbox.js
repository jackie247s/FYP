import React, { Component } from 'react';
import {Text} from 'react-native';
import { Container, Header, Content, Item, Input } from 'native-base';

const InputBox = (props) =>{
	return (
      <Item style={{marginTop:20}} rounded>
            <Input placeholder={props.placeholderText}/>
          </Item>
	
          
        
    );
}

export default InputBox;