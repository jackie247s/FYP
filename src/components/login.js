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
import { Button } from 'native-base';
import { RkAvoidKeyboard } from 'react-native-ui-kitten';
import firebase from '../firebase';
import { FormInput } from './Form';

const width = Dimensions.get('window').width;
const mar = width - 50;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      email: '',
      password: ''
    };
  }

    handleLogin(event) {
      event.preventDefault();

      const self = this;
      const Email = this.state.email;
      const Password = this.state.password;
      const Auth = firebase.auth();
      this.setState({ visible: true });

      const formValidated = this.validateForm();

      if (formValidated) {
        //Success case
        Auth.signInWithEmailAndPassword(Email, Password).then(authData => {
          Auth.onAuthStateChanged((user) => {
            if (user) {
              if (user.emailVerified) {
                self.routeUser(user);
              }
              else {
                const errorMessage = 'Email not verified';
                Actions.Login();
                self.setState({ visible: false });
                alert(errorMessage);
              }
            }
          });
        })
        .catch(error => {
          const errorMessage = error.message;
          alert(errorMessage);
          self.setState({ visible: false });
        });
      }
    }

    // Route the user based on certain factors
    routeUser(user) {
      // this.routeWhetherFormFilled(user);
      this.routeWhetherDocsSubmitted2(user);
      this.setState({ visible: false });
    }

    routeWhetherFormFilled(user) {
      const authorRef = firebase.database().ref(`authorized_merchants/${user.uid}`);
      authorRef.once('value', snapshot => {
        if (snapshot.val() === null) {
          //The user has not filled in the form
          Actions.TermsConditions({ user });
        }
        else {
          // The user has filled in the form
          this.routeWhetherDocsSubmitted(snapshot, user);
        }
      });
    }

    routeWhetherDocsSubmitted2(user) {
      const docImagesRef = firebase.storage().ref(`merchantDocImages/${user.uid}`);
      const onResolve = () => {
        this.routeWhetherAutorized2(user);
      };
      const onReject = () => {
        Actions.AttachDocs({ user });
      };
      docImagesRef.getDownloadURL().then(onResolve, onReject);
    }

    routeWhetherAuthorized2(user) {
      const authorRef = firebase.database().ref(`authorized_merchants/${user.uid}`);
      authorRef.once('value', snapshot => {

        if (snapshot.val() === null) {
          //The user has not filled in the form
          const authorRef2 = firebase.database().ref(`authorized_merchants/${user.uid}`);
          authorRef2.push({ authorized: false });
          Actions.PleaseWait();
        }
        else {
          // Confirm whether he is authorized
          const children = snapshot.val();
          const authorObject = children[Object.keys(children)[0]];
          if (authorObject.authorized) {
            // The user is authorized. Give him access to the core app
            Actions.TabBar({ user });
          }
          else {
            // The user is not authorized. Show him please wait screen
            Actions.PleaseWait();
          }
        }
      });
    }

    routeWhetherDocsSubmitted(snapshot, user) {
      const docImagesRef = firebase.storage().ref(`merchantDocImages/${user.uid}`);
      const onResolve = () => {
        this.routeWhetherAutorized(snapshot, user);
      };
      const onReject = () => {
        Actions.AttachDocs({ user });
      };
      docImagesRef.getDownloadURL().then(onResolve, onReject);
    }

    routeWhetherAutorized(snapshot, user) {
      // Confirm whether he is authorized
      const children = snapshot.val();
      const authorObject = children[Object.keys(children)[0]];
      if (authorObject.authorized) {
        // The user is authorized. Give him access to the core app
        Actions.TabBar({ user });
      }
      else {
        // The user is not authorized. Show him please wait screen
        Actions.PleaseWait();
      }
    }

    validateForm() {
      const Email = this.state.email;
      const Password = this.state.password;

      if (Email == null || Password == null) {
        this.setState({ visible: false });
        alert('Please Fill all the fields');
        return false;
      }

      return true;
    }

    forgetPassword() {
      Actions.ForgetPassword();
    }


    MoveToSignUp() {
      Actions.Signup();
    }

    renderButton() {
      const { buttonStyle } = styles;
      if (this.state.visible) {
        return (
          <Button style={buttonStyle} rounded light>
             <ActivityIndicator size={'small'} />
          </Button>
        );
      }

      return (
        <Button style={buttonStyle} rounded light onPress={this.handleLogin.bind(this)}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Login</Text>
        </Button>
      );
     }

  render() {
    const { backgroundImage, image, SignupbuttonStyle, textRow, footer } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        <RkAvoidKeyboard>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
            <Image style={image} source={require('../images/logo.png')} />
          </View>

          <View style={{ marginLeft: 15, marginRight: 10 }}>
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

          <View style={footer}>
            <View style={textRow}>
              <Text style={{ color: '#dbd8d8' }}>Dont have an account?</Text>
            </View>
            <Button
              style={SignupbuttonStyle}
              rounded transparent
              onPress={this.MoveToSignUp.bind(this)}
            >
              <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }} >Signup Now</Text>
            </Button>
          </View>
        </RkAvoidKeyboard>
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
