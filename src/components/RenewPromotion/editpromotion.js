import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { Label } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { RkAvoidKeyboard } from 'react-native-ui-kitten';
import InputBox from '../inputbox';
import RedButton from '../redbutton';
import firebase from '../../firebase';
import { FormValidator } from '../Form';

class EditPromotion extends Component {
  constructor(props) {
    super(props);
    const { promoid, productname, productdesc, promotype, discount } = this.props.promotion;
    this.state = {
      promoid,
      productname,
      productdesc,
      promotype,
      discount
    };
  }

  onButtonPress() {
    if (this.validateForm()) {
      this.updatePromotion();
    }
  }

  validateForm() {
    let formValidated = true;

    if (!FormValidator.checkIfFieldEmpty(this.state)) {
      alert('Please fill out all the fields');
      formValidated = false;
    }

    return formValidated;
  }

  updatePromotion() {
    // const promotion = firebase.database().ref('promotions');
    // const promoid = this.state.promoid;
    // const newpromo = {
    //   productname: this.state.productname,
    //   productdesc: this.state.productdesc,
    //   promotype: this.state.promotype,
    //   discount: this.state.discount
    // };
    // const updates = {};
    // updates[promoid] = newpromo;
    // promotion.update(updates);

    const { modal } = this.props;

    const promotion = firebase.database().ref('promotions');
    const promoid = this.state.promoid;
    const newpromo = {
      productname: this.state.productname,
      productdesc: this.state.productdesc,
      promotype: this.state.promotype,
      discount: this.state.discount
    };
    const updates = {};
    updates[promoid] = newpromo;
    promotion.update(updates);
    modal.setModalVisible(false);
  }

  render() {
    const { visible, modal } = this.props;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {
            alert('Modal has been closed.');
            modal.setModalVisible(false);
          }}
        >
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
            />

            <View style={styles.buttonContainerStyle}>
                <RedButton
                  buttonText={'Submit'}
                  onPress={this.onButtonPress.bind(this)}
                />
            </View>
          </RkAvoidKeyboard>
        </Modal>
      </View>
    );
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  }
};

export default EditPromotion;
