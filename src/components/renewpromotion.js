import React, { Component } from 'react';
import { Container, List, Spinner } from 'native-base';
import firebase from '../firebase';
import Promotion from './RenewPromotion/promotion';

class RenewPromotion extends Component {
  constructor() {
    super();
    this.state = {
      promotions: [],
      loading: true
    };
  }

  componentWillMount() {
    const promotionsRef = firebase.database().ref('promotions');
    promotionsRef.on('value', snapshot => {
      const promotionsArr = [];
      let obj = {};
      snapshot.forEach(childsnapshot => {
        obj = {
          promoid: childsnapshot.key,
          productname: childsnapshot.val().productname,
          productdesc: childsnapshot.val().productdesc,
          promotype: childsnapshot.val().promotype,
          discount: childsnapshot.val().discount
        };
        promotionsArr.push(obj);
      });
      console.log(promotionsArr);
      this.setState({ promotions: promotionsArr, loading: false });
    });
  }

  renderPromotions() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return this.state.promotions.map(promotion =>
      <Promotion promotion={promotion} />);
  }

  render() {
    return (
      <Container>
        <List>
          {this.renderPromotions()}
        </List>
      </Container>
    );
  }
}

export default RenewPromotion;
