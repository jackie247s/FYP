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
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      Record: {
          email: '',
          password: ''
      }
    };
  }

    handleLogin(event) {
      event.preventDefault();

      const self = this;
      const Email = this.state.email;
      const Password = this.state.password;
      this.setState({ visible: true });
      if (Email == null && Password == null) {
        this.setState({ visible: false });
        alert('Please Fill all the fields');
      } else if (Email == null) {
        this.setState({ visible: false });
        alert ('Please Fill all the fields');
      } else if (Password == null) {
        this.setState({ visible: false });
        alert('Please Fill all the fields');
      } else {
        firebase.auth().signInWithEmailAndPassword(Email, Password).then(authData => {
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              if (user.emailVerified) {
                Actions.TabBar({ userid: user.uid });
              } else {
                const errorMessage = 'Email not verified';
                Actions.Login();
                self.setState({ visible: false });
                alert(errorMessage);
              }
            }
          });
        }).catch(error => {
           const check = false;
           const errorMessage = error.message;
            alert(errorMessage);
            self.setState({ visible: false });
        });
        }
    }

    forgetPassword() {
      Actions.ForgetPassword();
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
         <Button style={styles.buttonStyle} rounded light onPress={this.handleLogin.bind(this)}>
               <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Login</Text>
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

          <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
            <Icon style={{ color: '#fff' }} active name={'md-unlock'} />
              <Input
              placeholder='Password'
              placeholderTextColor={'#dbd8d8'}
              onChangeText={(password) => this.setState({ password })}
              />
          </Item>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
         {this.renderButton()}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
          <Button rounded transparent onPress={this.forgetPassword.bind(this)} >
            <Text
              style={{ fontWeight: 'bold', color: '#fff', fontSize: 24 }}
            >
            Forget Password
            </Text>
          </Button>
        </View>

        <View style={styles.footer}>
          <View style={styles.textRow}>
            <Text style={{ color: '#dbd8d8' }}>Dont have an account?</Text>
          </View>
          <Button
            style={styles.SignupbuttonStyle}
            rounded transparent
            onPress={this.MoveToSignUp.bind(this)}
          >
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
export default Login;
