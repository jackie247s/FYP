import React from 'react';
import { Container, List, ListItem, Thumbnail, Body, Button, Right, Text } from 'native-base';
import Promotion from './RenewPromotion/promotion';

const RenewPromotion = () => {
  return (
    <Container>
      <List>
        <Promotion />
      </List>
    </Container>
  );
};

export default RenewPromotion;
