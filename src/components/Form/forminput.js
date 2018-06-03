import React from 'react';
import { Item, Input, Icon } from 'native-base';

const FormInput = (props) => {
  const { placeholder, icon, onChangeText, value, secureTextEntry } = props;

  return (
    <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
      <Icon style={{ color: '#fff' }} active name={icon} />
        <Input
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#dbd8d8'}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
    </Item>
  );
};

export { FormInput };
