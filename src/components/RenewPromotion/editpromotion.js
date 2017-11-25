import React from 'react';
import { Modal, View } from 'react-native';
import { Label } from 'native-base';
import DatePicker from 'react-native-datepicker';
import InputBox from '../inputbox';

const EditPromotion = ({ visible }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => alert('Modal has been closed.')}
      >
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
      </Modal>
    </View>
  );
};

export default EditPromotion;
