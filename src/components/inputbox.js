import React from 'react';
import { Item, Input } from 'native-base';

const InputBox = (props) => {
	return (
      <Item style={{ marginTop: 20 }} rounded>
        <Input placeholder={props.placeholderText} style={props.style} multiline={props.multiline} />
      </Item>
    );
};

export default InputBox;
