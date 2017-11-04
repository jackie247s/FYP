import React from 'react';
import { Item, Input,Icon } from 'native-base';

const InputBox = (props) => {
	return (
      <Item style={{ marginTop: 20 }} rounded>
       <Icon style={{color:'#d9534f'}} active name={props.Icon} />
            <Input placeholder={props.placeholderText} />
      </Item>
    );
};

export default InputBox;
