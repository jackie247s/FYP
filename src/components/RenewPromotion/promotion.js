import React, { Component } from 'react';
import { ListItem, Thumbnail, Body, Text, Right, Button } from 'native-base';
import EditPromotion from './editpromotion';

class Promotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { promotion } = this.props;
    const { productname, productdesc } = promotion;
    const modal = { setModalVisible: this.setModalVisible.bind(this) };
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
            onPress={() => this.setModalVisible(true)}
          >
            <Text style={{ color: 'black' }}>Edit</Text>
          </Button>
        </Right>
        <EditPromotion
          promotion={this.props.promotion}
          modal={modal}
          visible={this.state.modalVisible}
        />
      </ListItem>
    );
  }
}

export default Promotion;
