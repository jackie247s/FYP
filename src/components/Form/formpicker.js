import React from 'react';
import { View } from 'react-native';
import { Picker, Icon } from 'native-base';

const FormPicker = (props) => {
  const { selectedValue, onValueChange } = props;
  const { itemStyle, pickerStyle } = styles;
  console.log(props);

  return (
    <View style={itemStyle}>
      <Picker
        style={pickerStyle}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {props.children}
      </Picker>
    </View>
  );
};

const styles = {
  itemStyle: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#fff',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
    paddingLeft: 10
  },
  iconStyle: {
    color: '#fff',
  },
  pickerStyle: {
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#fff',
    color: '#fff',
  }
};

export { FormPicker };
