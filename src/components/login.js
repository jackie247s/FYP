
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import InputBox from './inputbox';
import RedButton from './redbutton';
import { Actions } from 'react-native-router-flux';
import { Item, Input, Icon, Button } from 'native-base';

const width = Dimensions.get('window').width;
const mar = width-50;
class Login extends React.Component {
  constructor(props) {
    super(props);
}

    MoveToSignUp() {
      Actions.Signup();
    }
  

  render() {
    return (
      <Image source={require('../images/bg.png')} style={styles.backgroundImage}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
          <Image style={styles.image} source={require('../images/logo.png')} />
        </View>
        <View style={{ marginLeft: 15, marginRight: 10 }}>
          <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
            <Icon style={{ color: '#fff' }} active name={'md-mail'} />
              <Input placeholder='Email' placeholderTextColor={'#dbd8d8'} />
          </Item>
          <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
            <Icon style={{ color: '#fff' }} active name={'md-unlock'} />
              <Input placeholder='Password' placeholderTextColor={'#dbd8d8'} />
          </Item>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
          <Button style={styles.buttonStyle} rounded light>
            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Login</Text>
          </Button>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
          <Button rounded transparent>
            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 24 }} >Forget Password</Text>
          </Button>
        </View>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <Text style={{ color: '#dbd8d8' }}>Dont have an account?</Text>
          </View>
          <Button style={styles.SignupbuttonStyle} rounded transparent  onPress={this.MoveToSignUp.bind(this)}>
            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }} >Signup Now</Text>
          </Button>
        </View>
      </Image>


    );
  }
}


const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: 150,
    height: 150,
    marginTop: 80
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle: {
    flexDirection:'row',
    width:mar,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop:20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
    
  },
  SignupbuttonStyle: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginTop: 10,
    marginLeft: 80,
    padding: 15,
  },
  footer: {
    marginTop: 10
  }

});
export default Login;
