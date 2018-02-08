import React from 'react';
import { View } from 'react-native';

const Screen = ({ children }) => {
  const { screenStyle } = styles;

  return (
    <View style={screenStyle}>
      {children}
    </View>
  );
};

const styles = {
  screenStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  }
};

export default Screen;
