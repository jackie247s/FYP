import React from 'react';
import { Item, Input, Icon } from 'native-base';

const FormInput = (props) => {
  const { placeholder, icon, onChangeText, value, secureTextEntry, keyboardType } = props;

  return (
    <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }} rounded>
      <Icon style={{ color: '#fff' }} active name={icon} />
        <Input
          style={{ color: '#dbd8d8' }}
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
