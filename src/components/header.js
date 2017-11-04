import React from 'react';
import { Left, Header, Body, Title } from 'native-base';


const HeaderComp = (props) => {
    return (
      <Header>
        <Left />
        <Body>
          <Title>{props.headerText}</Title>
        </Body>
      </Header>
    );
};

export default HeaderComp;
