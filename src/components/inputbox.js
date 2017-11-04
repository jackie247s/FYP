import React from 'react';
import { Item, Input,Icon } from 'native-base';

const InputBox = (props) => {
	return (
      <Item style={{ marginTop: 20 }} rounded>
       <Icon active name={props.Icon} />
            <Input placeholder={props.placeholderText} />
      </Item>
    );
};

export default InputBox;
