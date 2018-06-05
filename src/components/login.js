import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base';
import { RkAvoidKeyboard, RkButton, RkText } from 'react-native-ui-kitten';
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
      password: '',
      secureTextEntry: true
    };
  }

    handleLogin(event) {
      event.preventDefault();

      const self = this;
      var Email = this.state.email;
      Email=Email.toLowerCase();
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
                Alert.alert(errorMessage);
              }
            }
          });
        })
        .catch(error => {
          const errorMessage = error.message;
          Alert.alert(errorMessage);
          self.setState({ visible: false });
        });
      }
    }

    // Route the user based on certain factors
    routeUser(user) {
      // this.routeWhetherFormFilled(user);
      this.routeWhetherFormFilled(user);
    }

    routeWhetherFormFilled(user) {
      var self = this;
      console.log(user);
      const email = user.email.split("@")[0];
      const authorRef = firebase.database().ref(`authorized_merchants/${email}`);
      authorRef.once('value', snapshot => {
        if (snapshot.val() === null) {
          //The user has not filled in the form
          console.log('Not filled');
          self.setState({ visible: false });
          Actions.TermsConditions({ user });
        }
        else {
          // The user has filled in the form
          console.log('Filled');
          this.routeWhetherDocsSubmitted(snapshot, user);
        }
      });
    }

    routeWhetherDocsSubmitted(snapshot, user) {
      const email = user.email.split("@")[0];
      const docImagesRef = firebase.storage().ref(`${email}/cnic/doc.jpg`);
      const onResolve = () => {
        this.routeWhetherAutorized(snapshot, user);
      };
      const onReject = () => {
        this.setState({ visible: false });
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
        this.setState({ visible: false });
        Actions.TabBar({ user });
      }
      else {
        // The user is not authorized. Show him please wait screen
        this.setState({ visible: false });
        Actions.PleaseWait();
      }
    }

    validateForm() {
      const Email = this.state.email;
      const Password = this.state.password;

      if (Email == null || Password == null) {
        this.setState({ visible: false });
        Alert.alert('Please Fill all the fields');
        return false;
      }

      return true;
    }

    forgetPassword() {
      Actions.ForgetPassword();
    }

    Show_hidePassword() {
      if (this.state.secureTextEntry) {
        this.setState({ secureTextEntry: false });
      }
      else {
        this.setState({ secureTextEntry: true });
      }
    }


    MoveToSignUp() {
      Actions.Signup();
    }

   renderButton() {
      const { buttonStyle } = styles;
      if (this.state.visible) {
        return (
          <Button style={buttonStyle} rounded>
             <ActivityIndicator size={'small'} />
             <Text style={{ fontSize: 18, color: 'white' }}> Loading....</Text>
          </Button>
        );
      }

      return (
        <Button style={buttonStyle} rounded onPress={this.handleLogin.bind(this)}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Login</Text>
        </Button>
      );
     }

  render() {
    console.disableYellowBox = true;
    console.warn('YellowBox is disabled.');
    const { backgroundImage, image, SignupbuttonStyle, textRow, footer } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        <RkAvoidKeyboard>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
            <Image style={image} source={require('../images/logo.png')} />
          </View>

          <View>
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
              secureTextEntry={this.state.secureTextEntry}
              onChangeText={(password) => this.setState({ password })}
            />
            <TouchableOpacity
              style={{ alignSelf: 'flex-end', marginTop: 10, marginRight: 15 }}
              onPress={this.Show_hidePassword.bind(this)}
            >
              <Text style={{ fontSize: 18, color: 'white' }}>Show Pass</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
            {this.renderButton()}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
            <Button rounded transparent onPress={this.forgetPassword.bind(this)} >
              <Text style={{ fontWeight: 'bold', color: '#fff',
               fontSize: 18,borderBottomWidth:1,borderColor:'white' }}
              >
              Forget Password?
              </Text>
            </Button>
          </View>

          <View>
            <View style={textRow}>
              <Text style={{ color: 'white', fontSize: 18 }}>-Or-</Text>
            </View>
            <RkButton style={{width:width-50,height:40,backgroundColor:'#ca3947',alignSelf:'center',marginTop:10}} onPress={this.MoveToSignUp.bind(this)}>
            <RkText rkType='header6' style={{ fontWeight: 'bold',color:'white' }}>CREATE NEW MERCHANT ACCOUNT </RkText>
           </RkButton>
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
    marginTop: 50
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
    position: 'relative',
    backgroundColor:'#ca3947'

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
