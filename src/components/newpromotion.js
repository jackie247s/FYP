import React, { Component } from 'react';
import { ScrollView, View, Image, Text, Alert } from 'react-native';
import { Label, Spinner } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { RkAvoidKeyboard } from 'react-native-ui-kitten';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../firebase';
import RedButton from './redbutton';
import InputBox from './inputbox';
import { FormValidator } from './Form';

class NewPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname:'',
      productdesc:'',
      promotype:'',
      discount:'',
      startdate: '2017-12-10',
      enddate: '2017-12-10',
      userid: props.userid,
      email: props.email,
      loading: false
    };
  }


  addPromotion() {
    this.setState({ loading: true });
      const ProductName = this.state.productname;
      const ProductDesc = this.state.productdesc;
      const PromoType = this.state.promotype;
      const Discount = this.state.discount;
      if (ProductName == '' && ProductDesc == '' && PromoType == '' && Discount == '' )
      {
        this.setState({ loading: false });
        Alert.alert(
        'Error',
        'Please fill out all the fields');
      } else if (ProductName == '') {
       this.setState({ loading: false });
       Alert.alert(
        'Error',
        'Please fill Product Name field');
      } else if (ProductDesc == '') {
        this.setState({ loading: false });
        Alert.alert(
        'Error',
        'Please fill Product description field');
        } else if (PromoType == '') {
          this.setState({ loading: false });
          Alert.alert(
           'Error',
           'Please fill Promo Type field');
          } else if (Discount == '') {
            this.setState({ loading: false });
            Alert.alert(
             'Error',
             'Please fill Discount field');
             } else {
                const email = this.state.email.split('@')[0];
                const promotions = firebase.database().ref(`promotions/${email}`);
                const promotion = {
                  productname: this.state.productname,
                  productdesc: this.state.productdesc,
                  promotype: this.state.promotype,
                  discount: this.state.discount,
                  startdate: this.state.startdate,
                  enddate: this.state.enddate
                };
                this.setState({
                  productname: '',
                  productdesc: '',
                  promotype: '',
                  discount: '',
                  loading: false
                });
                promotions.push(promotion);
                Alert.alert('Promotion Added');
              }
    }

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner />
      );
    }
    return (
      <View style={styles.buttonContainerStyle}>
          <RedButton buttonText={'Submit'} onPress={this.addPromotion.bind(this)} />
      </View>
    );
  }

  render() {
    const { backgroundImage } = styles;
    const bgImage = require('../images/addp1.jpg');

    return (
        <Image source={bgImage} style={backgroundImage}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Text style={styles.TextStyle}>Add Your Promotions</Text>
            </View>
              <View>
                <InputBox
                  placeholderText={'Product Name'}
                  Icon={'md-create'}
                  value={this.state.productname}
                  onChangeText={(productname) => this.setState({ productname })}
                />
                <InputBox
                  placeholderText={'Product Description'}
                  Icon={'md-document'}
                  value={this.state.productdesc}
                  onChangeText={(productdesc) => this.setState({ productdesc })}
                />
                    {/* Change to Dropdown */}
                <InputBox
                  placeholderText={'Promotion Type'}
                  Icon={'md-options'}
                  value={this.state.promotype}
                  onChangeText={(promotype) => this.setState({ promotype })}
                />
                <InputBox
                  placeholderText={'Discount'}
                  Icon={'md-pricetag'}
                  value={this.state.discount}
                  onChangeText={(discount) => this.setState({ discount })}
                />
                <Label style={{ margin: 5, marginLeft: 50, color: '#dbd8d8' }}>Start date</Label>
                <DatePicker
                  style={{ width: 300, borderWidth: 0, color: 'white'}}
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
            style={{ width: 300, borderWidth: 0, color: 'white' }}
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
              </View>
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
