import React from 'react';
import { Item, Input, Icon } from 'native-base';

const FormInput = (props) => {
  const { placeholder, icon, onChangeText, value, secureTextEntry, keyboardType } = props;

  return (
    <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 20,borderColor:'white',borderWidth:2 }} rounded>
      <Icon style={{ color: '#ca3947' }} active name={icon} />
        <Input
          style={{ color: 'black'}}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#dbd8d8'}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
    </Item>
  );
};

export { FormInput };
