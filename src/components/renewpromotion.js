import React, { Component } from 'react';
import { Container, List } from 'native-base';
import firebase from './firebase';
import Promotion from './RenewPromotion/promotion';

class RenewPromotion extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <Container>
        <List>
          <Promotion />
        </List>
      </Container>
    );
  }
}

export default RenewPromotion;
