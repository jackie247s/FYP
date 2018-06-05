/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert
} from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { RkAvoidKeyboard,RkButton,RkText } from 'react-native-ui-kitten';
import { FormInput } from './Form';
import firebase from '../firebase';

const width = Dimensions.get('window').width;
const mar = width - 50;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
          Record: {
            name: '',
            email: '',
            password: ''
          }
        };
      }

  handleform(event) {
     event.preventDefault();
     const name = this.state.name;
     var email = this.state.email;
     email=email.toLowerCase();
     const password = this.state.password;
     let errorMessage = '';
     if (name == null && email == null && password == null)
            Alert.alert('Please Fill all the fields');
     else if (name == null)
            Alert.alert('Please Fill the Name field');
     else if (email == null)
            Alert.alert('Please Fill the Email field');
     else if (password == null)
            Alert.alert('Please Fill the Password field');
     else {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(newUser => {
                firebase.auth().currentUser.sendEmailVerification().then(() => {
                   const userInfo = {
                      Name: name,
                      Email: email,
                      Password: password
                    };
                    const splitEmail = email.split('@')[0];
                   firebase.database().ref(`merchants/${splitEmail}`).push(userInfo);
                  Alert.alert('verify your email to signin to continue');
                  Actions.Login();
                }).catch(error => {
                    errorMessage = error.message;
                    Alert.alert(errorMessage);
                    });
             }).catch(error => {
                errorMessage = error.message;
                Alert.alert(errorMessage);
               });
        }
}

MoveToSignIn() {
  Actions.Login();
}

renderButton() {
  return (
    <Button style={styles.SignInbuttonStyle} rounded transparent>
        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }} >Sign In</Text>
    </Button>
  );
}

  render() {
    console.disableYellowBox = true;
    return (
      <Image source={require('../images/bg.png')} style={styles.backgroundImage}>
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
            <Image style={styles.image} source={require('../images/logo.png')} />
           </View>
            <View style={{marginTop:10 }}>
              <FormInput
                value={this.state.name}
                placeholder='Name'
                icon='md-person'
                onChangeText={(name) => this.setState({ name })}
              />
              <FormInput
                value={this.state.email}
                placeholder='Email'
                icon='md-mail'
                onChangeText={(email) => this.setState({ email })}
              />
              <FormInput
                value={this.state.password}
                placeholder='Password'
                icon='md-unlock'
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
              <Button style={styles.buttonStyle} rounded onPress={this.handleform.bind(this)}>
                <Text style={{ fontSize: 18, fontWeight: 'bold',color:'white' }}>Sign Up</Text>
              </Button>
            </View>
            <View style={styles.footer}>
              <View style={styles.textRow}>
                <Text style={{ color: 'white',fontSize:18 }}>Already have an account?</Text>
              </View>
              <RkButton style={{width:width-50,height:40,backgroundColor:'#ca3947',alignSelf:'center',marginTop:10}} onPress={this.MoveToSignIn.bind(this)}>
                <RkText rkType='header6' style={{ fontWeight: 'bold',color:'white' }}>Sign in now! </RkText>
              </RkButton>
          </View>
        </ScrollView>
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
    marginTop: 20
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
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
    position: 'relative',
    backgroundColor:'#ca3947'

  },
   SignInbuttonStyle: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginTop: 10,
    marginLeft: 80,
    padding: 15,
  },
  footer: {
    marginTop: 20,
    paddingBottom: 30
  }

});

export default Signup;
