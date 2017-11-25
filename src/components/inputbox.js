import React from 'react';
import { Item, Input, Icon } from 'native-base';

const InputBox = (props) => {
	return (
		//#d9534f
      <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
				<Icon style={{ color: '#fff' }} active name={props.Icon} />
				<Input
					placeholder={props.placeholderText}
					placeholderTextColor={'#dbd8d8'}
					value={props.value}
					onChangeText={props.onChangeText}
				/>
      </Item>
    );
};

export default InputBox;
