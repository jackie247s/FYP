import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base';

class Popup extends React.Component {
  componentDidMount() {
    setTimeout(wait, 3000);
      function wait() {
        Actions.Login();
      }
  }

	render() {
		return (
        <View
          style={styles.popUpStyle}
        >
            <Image style={styles.image} source={require('../images/logo.png')}/>
        </View>
			);
	}
}

const styles = StyleSheet.create({
  popUpStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    flexDirection: 'row'
  },
  image: {
    height: 250,
    width: 250,
    marginLeft: 0,
    resizeMode: 'contain'
  }
});

export default Popup;
