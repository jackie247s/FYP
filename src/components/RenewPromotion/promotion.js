import React, { Component } from 'react';
import { ListItem, Thumbnail, Body, Text, Right, Button } from 'native-base';
import EditPromotion from './editpromotion';

class Promotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoid: props.promotion.promoid,
      modalVisible: false
    };
  }

  setModalVisible() {
    this.setState({ modalVisible: true });
  }

  render() {
    const { promotion } = this.props;
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
          <Button
            rounded
            style={{ backgroundColor: '#d9534f' }}
            onPress={this.setModalVisible.bind(this)}
          >
            <Text style={{ color: 'black' }}>Edit</Text>
          </Button>
        </Right>
        <EditPromotion visible={this.state.modalVisible} />
      </ListItem>
    );
  }
}

export default Promotion;
