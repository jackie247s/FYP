import React from 'react';
import { Item, Input, Icon } from 'native-base';

const FormTextBox = (props) => {
  const { placeholder, icon, onChangeText, value } = props;

  return (
    <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
      <Icon style={{ color: '#ca3947' }} active name={icon} />
        <Input
          style={{color:'black'}}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#dbd8d8'}
          onChangeText={onChangeText}
          multiline
        />
    </Item>
  );
};

export { FormTextBox };
