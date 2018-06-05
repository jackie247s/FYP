import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
class HeaderComp extends React.Component{
  Goback(){
    Actions.pop();
  }
  render(){
    const { containerStyle,textContainerStyle, textStyle, IconStyle } = styles;
    return (
      <View style={containerStyle}>
        <TouchableOpacity onPress={this.Goback.bind(this)}>
          <Icon style={IconStyle} name="ios-arrow-back"/>
        </TouchableOpacity>
        <View style={textContainerStyle}>
          <Text style={textStyle}>{this.props.headerText}</Text>
        </View>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    alignItems: 'center',
    backgroundColor:'#ca3947',
    justifyContent: 'center',
    flexDirection:'row',
    height: 40,
  },
  textContainerStyle: {
    alignItems: 'center',
    flex: 1
  },
  textStyle: {
    color: '#fff',
    fontSize: 15,
    fontWeight:'bold'
  },
  IconStyle:{
    color:'white',
    marginLeft:10,
  }
};

export default HeaderComp;
