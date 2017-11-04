import React from 'react';
import { ListItem, Thumbnail, Body, Text, Right, Button } from 'native-base';

const Promotion = () => {
  return (
    <ListItem>
      <Thumbnail square size={80} source={require('../../images/afghani_tikka.png')} />
      <Body>
        <Text>Deal 1</Text>
        <Text>30% off on deal of 2 Large Afghani Pizzas with 1.5 Liter drink</Text>
      </Body>
      <Right>
        <Button rounded style={{ backgroundColor: '#f05921' }}>
          <Text style={{ color: 'black' }}>Edit</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default Promotion;
