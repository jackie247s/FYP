import React, { Component } from 'react';
import { Container, Header, Body,Title } from 'native-base';


const HeaderComp = (props) =>{
return (
      
        <Header>
          
          <Body>
            <Title>{props.headerText}</Title>
          </Body>
          
        </Header>
      
    );
}

export default HeaderComp;
