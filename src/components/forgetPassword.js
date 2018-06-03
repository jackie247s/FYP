import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Item, Input, Icon, Button } from 'native-base';
import firebase from '../firebase';

const width = Dimensions.get('window').width;
const mar = width - 50;
class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      email: '',
      };
    }

    handlePassword() {
      const self = this;
      const auth = firebase.auth();
      const emailAddress = this.state.email;
      auth.sendPasswordResetEmail(emailAddress).then(() => {
      alert('Link to reset password sent to email');
      }).catch(error => {
          errorMessage = error.message;
          alert(errorMessage);
          });
    }
    MoveToSignUp() {
      Actions.Signup();
    }

    renderButton() {
     if (this.state.visible) {
       return (
        <Button style={styles.buttonStyle} rounded light>
           <ActivityIndicator size={'small'} />
        </Button>);
     }
      return (
         <Button style={styles.buttonStyle} rounded light  onPress={this.handlePassword.bind(this)} >
               <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Reset Password</Text>
         </Button>);
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
              <Input
              placeholder='Email'
              placeholderTextColor={'#dbd8d8'}
              onChangeText={(email) => this.setState({ email })}
              />
          </Item>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
         {this.renderButton()}
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
    flexDirection: 'row',
    width: mar,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'

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
export default ForgetPassword;
