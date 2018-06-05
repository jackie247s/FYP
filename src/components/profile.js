import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, Button, Icon , Thumbnail , Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Image, Dimensions, View
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkButton
} from 'react-native-ui-kitten';
import firebase from '../firebase';


const width = Dimensions.get('window').width;
const mar = width - 200;

 class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: '',
      email: '',
      dp: null
    };
  }

 componentWillMount() {
  const self = this;
  const userId = this.props.ID;
  const imageRef = firebase.storage().ref(userId).child('dp.jpg');
  imageRef.getDownloadURL().then((url) => {
    this.setState({ dp: url });
  }).catch((error) => { console.log(error.message); });


  const RefData = firebase.database().ref(`merchants/${userId}/{userKey}`);
  RefData.on('value', (snapshot) => {
    if (snapshot.val() === null) {
      Name = '-----';
      Email = '-----';
      Contact = '-------';
    } else {
      Name = snapshot.val().Name;
      Email = snapshot.val().Email;
      Contact='03470000011'
    }
    self.setState({ name: Name, email: Email, contact: Contact });
  });
  }

 openPicker() {
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;
    //const { uid } = this.state.user
    const uid = this.props.ID;
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo'
    }).then(image => {

      const imagePath = image.path;
      let uploadBlob = null;

      const imageRef = firebase.storage().ref(uid).child("dp.jpg");
      let mime = 'image/jpg';
      fs.readFile(imagePath, 'base64')
        .then((data) => {
          //console.log(data);
          return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then((blob) => {
          uploadBlob = blob;
          return imageRef.put(blob, { contentType: mime });
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then((url) => {

          let userData = {};
          //userData[dpNo] = url
          //firebase.database().ref('users').child(uid).update({ ...userData})
          this.setState({ dp: url });
        })
        .catch((error) => {
          Alert.alert(error);
        })
    })
    .catch((error) => {
      Alert.alert(error);
    })
  }
handleform(){
  Alert.alert("User Information Updated!")
}
Goback() {
  Actions.pop();
}
  render() {
    var image=[];
    if(this.state.dp!=null){
      image.push(
        <Thumbnail style={{width:180,height:180,borderRadius:100,borderColor:'white',borderWidth:2}}
        source={{uri: this.state.dp}}
        />
      )
    }
    else{
      image.push(
        <Thumbnail  style={{width:180,height:180,borderRadius:100,borderColor:'white',borderWidth:2}}
        source={require('../images/placeholder_profile_photo.png')}
        />
      )
    }
    return (
      <Container>
        <Content>
          <ScrollView>
          <Image source={require('../images/ProfileBg.jpg')} style={styles.backgroundImage}>
              <View style={styles.header}>
                <View style={{alignSelf:'center'}}>
                  {image}
                  <Button style={{alignSelf:'center',marginTop:-50,marginLeft:100}} transparent onPress={this.openPicker.bind(this)}>
                    <Icon style={{ color: 'white',fontSize:60 }}  name={'ios-reverse-camera'} />
                  </Button>
                </View>
              </View>
            </Image>
          <View style={styles.section}>
            <View style={{alignSelf:'center',margin:5}}>
                <Text style={{color:'#ca3947',fontWeight:'bold'}}>PERSONAL INFORMATION</Text>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Name'
                           value={this.state.name}
                           rkType='right clear'
                           onChangeText={(text) => this.setState({name: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Email'
                           value={this.state.batch}
                           onChangeText={(text) => this.setState({email: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Contact'
                           value={this.state.contact}
                           onChangeText={(text) => this.setState({contact: text})}
                           rkType='right clear'/>
            </View>


          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center',marginBottom:20 }} >
              <Button style={styles.buttonStyle} rounded onPress={this.handleform.bind(this)}>
                <Text style={{ fontSize: 18, fontWeight: 'bold',color:'white' }}>Save</Text>
              </Button>
          </View>
      </ScrollView>
  </Content>

      </Container>
    );
  }
}


let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingVertical: 25
  },
  section: {
    marginVertical: 20
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 5,
    marginBottom: 10,
    marginTop: 32,
    width: width - 15
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  buttonStyle: {
    flexDirection: 'row',
    width: width-30,
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

  }
}));

export default Profile;
