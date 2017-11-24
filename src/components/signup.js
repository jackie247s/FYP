/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import { Item, Input, Icon, Button } from 'native-base';
import firebase from '../firebase';

const width = Dimensions.get('window').width;
const mar = width - 50;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    Record: { name: '',
               email: '',
               password: '' }
             };
      }

  handleform(event) {
     event.preventDefault();
     var name = this.state.name;
     var email = this.state.email;
     var password = this.state.password;
     if (name == null && email == null && password == null)
        this.popup.alert('Please Fill all the fields'); 
     else if(name == null)
      this.popup.alert('Please Fill the Name field'); 
     else if(email == null)
      this.popup.alert('Please Fill the Email field');
     else if(password == null)
      this.popup.alert('Please Fill the Password field');
     else {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser)=>{
                firebase.auth().currentUser.sendEmailVerification().then(() => {
                
                   firebase.database().ref('Users/').set({
                    Name: name,
                    Email:email,
                    Password:password
                  });
                }).catch(function (error) {
                    errorMessage = error.message;
                    alert(errorMessage);
                    });
             }).catch(function(error) {
                errorMessage = error.message;
                alert(errorMessage);
               });
        }   
}
  render() {
    return (
      <Image source={require('../images/bg.png')} style={styles.backgroundImage}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
          <Image style={styles.image} source={require('../images/logo.png')} />
         </View>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
            <Icon style={{ color: '#fff' }} active name={'md-person'} />
              <Input placeholder='Name' placeholderTextColor={'#dbd8d8'} onChangeText={(name) => this.setState({name})} />
          </Item>
          <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
            <Icon style={{ color: '#fff' }} active name={'md-mail'} />
              <Input placeholder='Email' placeholderTextColor={'#dbd8d8'} onChangeText={(email) => this.setState({email})} />
          </Item>
          <Item style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }} rounded>
            <Icon style={{ color: '#fff' }} active name={'md-unlock'} />
              <Input placeholder='Password' placeholderTextColor={'#dbd8d8'}  onChangeText={(password) => this.setState({password})}/>
          </Item>
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
    marginTop: 10
  }

});
export default Signup;
