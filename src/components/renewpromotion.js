import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, List, Spinner} from 'native-base';
import firebase from '../firebase';
import Promotion from './RenewPromotion/promotion';

class RenewPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotions: [],
      userid: props.userid,
      loading: true
    };
  }

  componentWillMount() {
    const userId = this.state.userid;
    const promotionsRef = firebase.database().ref('promotions/' + userId);
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
    if (this.state.promotions.length === 0) {
      return (
        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
          <Text>You have not added any promotions yet</Text>
        </View>
      );
    }
    return this.state.promotions.map(promotion =>
      <Promotion promotion={promotion} />);
  }

  render() {
    return (
      <Container>
        <List>
          <ScrollView>
            {this.renderPromotions()}
          </ScrollView>
        </List>
      </Container>
    );
  }
}

export default RenewPromotion;
