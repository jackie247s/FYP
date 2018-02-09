import React, { Component } from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title,Text } from 'native-base';
import {Actions} from 'react-native-router-flux';
import firebase from '../firebase'
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-crop-picker'
import {
  ScrollView,
  StyleSheet,
  Image,Dimensions,View,ActivityIndicator,TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
  RkButton
} from 'react-native-ui-kitten';


const width = Dimensions.get('window').width;
const mar=width-200;

 class Profile extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      name:'',
      contact:'',
      batch:'',
      dp:null
    }
  }

 componentWillMount() {
  const self = this;
  const userId = this.props.ID;
  const imageRef = firebase.storage().ref(userId).child("dp.jpg");
  let Name;
  let Batch;
  let Contact;
  imageRef.getDownloadURL().then((url) => {
    this.setState({ dp: url });
  }).catch((error) => { console.log(error.message); });


  const RefData = firebase.database().ref("Users/" + userId);
  RefData.on('value', (snapshot) => {
    Name = snapshot.val().UserName || 'name';
    Batch = snapshot.val().Batch || 'batch';
    Contact = snapshot.val().Contact || 'contact';
    self.setState({ name: Name, batch: Batch, contact: Contact });
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

          let userData = {}
          //userData[dpNo] = url
          //firebase.database().ref('users').child(uid).update({ ...userData})


          this.setState({dp:url});

        })
        .catch((error) => {
          alert(error);
        })
    })
    .catch((error) => {
      alert(error);
    })
  }

Goback() {
  Actions.pop();
}
  render() {
    const image = [];
      if (this.state.dp !== null) {
        image.push(<Image style={{width: 160, height: 150, borderRadius:20}} source={{uri: this.state.dp}} />)
      }
      else {
        image.push(<Image style={{width:160,height:150}} source={require('../images/placeholder_profile_photo.png')}/>)
      }
    return (
      <Container>
         <Content style={{width:500}}>
      <ScrollView style={styles.root}>
        <RkAvoidKeyboard>
          <View style={styles.header}>
           <View style={{marginRight:mar,justifyContent:'center',alignItems:'center'}}>
        {image}
        <Button style={{alignSelf:'center'}} transparent onPress={this.openPicker.bind(this)}>
                        <Icon style={{ color: 'gray',fontSize:60 }}  name={'ios-reverse-camera-outline'} />
                    </Button>

      </View>
          </View>
          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType='header6 primary'>INFO</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Name'
                           value={this.state.name}
                           rkType='right clear'
                           onChangeText={(text) => this.setState({name: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Contact'
                           value={this.state.contact}
                           onChangeText={(text) => this.setState({contact: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Batch'
                           value={this.state.batch}
                           onChangeText={(text) => this.setState({batch: text})}
                           rkType='right clear'/>
            </View>

          </View>

          <View style={styles.section}>
            <RkButton rkType='primary' style={styles.button} onPress={this.openPicker.bind(this)}>
                <RkText style={{fontWeight:'bold',fontSize:23,color: 'white'}}> Save </RkText>
              </RkButton>
          </View>
        </RkAvoidKeyboard>
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
    marginVertical: 25
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
  }
}));

export default Profile;
