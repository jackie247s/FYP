import React from 'react';
import { ListItem, Thumbnail, Body, Text, Right, Button } from 'native-base';

const Promotion = ({ promotion }) => {
  const { productname, productdesc } = promotion;
  const thumbnail = require('../../images/afghani_tikka.png');

  return (
    <ListItem>
      <Thumbnail square size={80} source={thumbnail} />
      <Body>
        <Text>{productname}</Text>
        <Text>{productdesc}</Text>
      </Body>
      <Right>
        <Button rounded style={{ backgroundColor: '#d9534f' }}>
          <Text style={{ color: 'black' }}>Edit</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default Promotion;
