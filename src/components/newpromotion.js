import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Label, Spinner } from 'native-base';
import DatePicker from 'react-native-datepicker';
import firebase from '../firebase';
import RedButton from './redbutton';
import InputBox from './inputbox';

class NewPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: '',
      productdesc: '',
      promotype: '',
      loading: false
    };
  }

  onButtonPress() {
    this.setState({ loading: true });

    this.addPromotion();
  }

  onLoginSuccess() {
    this.setState({
      productname: '',
      productdesc: '',
      loading: false
    });
    alert('Promotion Added');
  }

  addPromotion() {
    const promotions = firebase.database().ref('promotions');
    const promotion = {
      productname: this.state.productname,
      productdesc: this.state.productdesc
    };
    promotions.push(promotion)
      .then(this.onLoginSuccess.bind(this));
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner />
      );
    }
    return (
      <View style={styles.buttonContainerStyle}>
          <RedButton buttonText={'Submit'} onPress={this.onButtonPress.bind(this)} />
      </View>
    );
  }

  render() {
    const { backgroundImage } = styles;
    const bgImage = require('../images/bg.png');

    return (
        <Image source={bgImage} style={backgroundImage}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Text style={styles.TextStyle}>Add Your Promotions</Text>
            </View>
            <InputBox
              placeholderText={'Product Name'}
              Icon={'md-create'}
              value={this.state.productname}
              onChangeText={productname => this.setState({ productname })}
            />
            <InputBox
              placeholderText={'Product Description'}
              Icon={'md-document'}
              value={this.state.productdesc}
              onChangeText={productdesc => this.setState({ productdesc })}
            />
                {/* Change to Dropdown */}
            <InputBox
              placeholderText={'Promotion Type'}
              Icon={'md-options'}
              value={this.state.promotype}
              onChangeText={promotype => this.setState({ promotype })}
            />
            <InputBox
              placeholderText={'Discount'}
              Icon={'md-pricetag'}
              value={this.state.discount}
              onChangeText={discount => this.setState({ discount })}
            />
            <Label style={{ margin: 5, marginLeft: 50, color: '#dbd8d8' }}>Start date</Label>
            <DatePicker
              style={{ width: 300, borderWidth: 0 }}
              date="2016-05-15"
              mode="date"
              pplaceholderText="select date"
              format="YYYY-MM-DD"
              minDate="2017-06-08"
              maxDate="2020-06-08"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon:
                 {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 15
                 },
                dateInput:
                 {
                   marginLeft: 50
                 }

              }}
              ///onDateChange={(date) => {this.setState({date: date})}}
            />
          <Label style={{ margin: 5, marginLeft: 50, color: '#dbd8d8' }}>End date</Label>
          <DatePicker
            style={{ width: 300, borderWidth: 0 }}
            date="2016-05-15"
            mode="date"
            pplaceholderText="select date"
            format="YYYY-MM-DD"
            minDate="2017-06-08"
            maxDate="2020-06-08"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 15
              },
              dateInput: {
                marginLeft: 50
              }

            }}
            ///onDateChange={(date) => {this.setState({date: date})}}
          />
          {this.renderButton()}
        </Image>
    );
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  image: {
    width: 120,
    height: 120
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  TextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  }
};

export default NewPromotion;
