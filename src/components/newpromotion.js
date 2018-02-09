import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Label, Spinner } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { RkAvoidKeyboard } from 'react-native-ui-kitten';
import firebase from '../firebase';
import RedButton from './redbutton';
import InputBox from './inputbox';
import { FormValidator } from './Form';

class NewPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: '',
      productdesc: '',
      promotype: '',
      startdate: '2017-12-10',
      enddate: '2017-12-10',
      userid: props.userid,
      loading: false
    };
  }

  onButtonPress() {
    if (this.validateForm()) {
      this.addPromotion();
    }
  }

  onLoginSuccess() {
    this.setState({
      productname: '',
      productdesc: '',
      promotype: '',
      discount: '',
      loading: false
    });
    alert('Promotion Added');
  }

  addPromotion() {
    this.setState({ loading: true });

    const userId = this.state.userid;
    const promotions = firebase.database().ref(`promotions/${userId}`);
    const promotion = {
      productname: this.state.productname,
      productdesc: this.state.productdesc,
      promotype: this.state.promotype,
      discount: this.state.discount,
      startdate: this.state.startdate,
      enddate: this.state.enddate
    };
    promotions.push(promotion)
      .then(this.onLoginSuccess.bind(this));
  }

  validateForm() {
    let formValidated = true;

    if (!FormValidator.checkIfFieldEmpty(this.state)) {
      alert('Please fill out all the fields');
      formValidated = false;
    }

    return formValidated;
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
            <RkAvoidKeyboard>
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
                date={this.state.startdate}
                mode="date"
                placeholder="Select Date"
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
                onDateChange={(startdate) => { this.setState({ startdate }); }}
              />
            <Label style={{ margin: 5, marginLeft: 50, color: '#dbd8d8' }}>End date</Label>
            <DatePicker
              style={{ width: 300, borderWidth: 0 }}
              date={this.state.enddate}
              mode="date"
              placeholder="Select Date"
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
              onDateChange={enddate => { this.setState({ enddate }); }}
            />
            {this.renderButton()}
            </RkAvoidKeyboard>
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
