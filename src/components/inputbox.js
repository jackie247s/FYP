import React from 'react';
import { Item, Input, Icon } from 'native-base';

const InputBox = (props) => {
	const { placeholderText, value, onChangeText } = props;

	return (
		//#d9534f
      <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
				<Icon style={{ color: '#fff' }} active name={props.Icon} />
				<Input
					style={{color:'#dbd8d8'}}
					placeholder={placeholderText}
					placeholderTextColor={'#dbd8d8'}
					value={value}
					onChangeText={onChangeText}
				/>
      </Item>
    );
};

export default InputBox;
