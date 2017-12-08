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
  Dimensions
} from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
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
     const email = this.state.email;
     const password = this.state.password;
     let errorMessage = '';
     if (name == null && email == null && password == null)
            alert('Please Fill all the fields');
     else if (name == null)
            alert('Please Fill the Name field');
     else if (email == null)
            alert('Please Fill the Email field');
     else if (password == null)
            alert('Please Fill the Password field');
     else {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(newUser => {
                firebase.auth().currentUser.sendEmailVerification().then(() => {
                   const userInfo = {
                      Name: name,
                      Email: email,
                      Password: password
                    };
                   firebase.database().ref('merchants/' + newUser.uid).push(userInfo);
                  alert('verify your email to signin to continue');
                  Actions.Login();
                }).catch(error => {
                    errorMessage = error.message;
                    alert(errorMessage);
                    });
             }).catch(error => {
                errorMessage = error.message;
                alert(errorMessage);
               });
        }
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
            <View style={{ marginLeft: 10, marginRight: 10 }}>
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
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
              <Button style={styles.buttonStyle} rounded light onPress={this.handleform.bind(this)}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
              </Button>
            </View>
            <View style={styles.footer}>
              <View style={styles.textRow}>
                <Text style={{ color: '#dbd8d8' }}>Already have an account?</Text>
              </View>
              <Button style={styles.SignInbuttonStyle} rounded transparent>
                <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }} >Sign In</Text>
              </Button>
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
    marginTop: 10,
    paddingBottom: 30
  }

});

export default Signup;
