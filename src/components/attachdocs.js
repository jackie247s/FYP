import React, { Component } from 'react';
import { View, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';
import firebase from '../firebase';
import { FormButton1, FormValidator, FormLink } from './Form';

class AttachDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: props.user.uid,
      cnicImage: false,
      domainImage:false
    };
  }

  onButtonPress() {
   if (this.state.cnicImage === true && this.state.domainImage === true) {
     Actions.TabBar({ user: this.state.userid });
   }
   else {
     Alert.alert('Please attach all required documents!');
   }
  }

 openPicker(document) {
    this.setState({ loading: true });
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;
    //const { uid } = this.state.user
    const uid = this.props.user.uid;
    ImagePicker.openCamera({
      width: 600,
      height: 600,
      cropping: false,
      mediaType: 'photo'
    }).then(image => {
      if (document === 'cnic') {
        this.setState({ cnicImage: true });
      }
      else if (document === 'domain') {
        this.setState({ domainImage: true });
      }
      const imagePath = image.path;
      let uploadBlob = null;

      const imageRef = firebase.storage().ref(uid+'/' + document).child("doc.jpg");
      const mime = 'image/jpg';
      fs.readFile(imagePath, 'base64')
        .then((data) => {
          //console.log(data);
          return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          if (document === 'cnic') {
            Alert.alert('Your CNIC has been attached!');
          }
          else if (document === 'domain') {
            Alert.alert('Your domain document has been attach!');
          }
          uploadBlob.close();
          return imageRef.getDownloadURL();
        });
      });
  }


  renderLinks() {
    const CNIC = 'cnic';
    const Domain = 'domain';
    const configArr = [
      {
        onPress: this.openPicker.bind(this, CNIC),
        buttonText: 'Attach CNIC'
      },
      {
        onPress: this.openPicker.bind(this, Domain),
        buttonText: 'Attach Domain'
      }
    ];

    return configArr.map(config => <FormLink config={config} />);
  }

  render() {
    const { backgroundImage, containerStyle, image } = styles;

    return (
      <Image source={require('../images/bg.png')} style={backgroundImage}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
          <Image style={image} source={require('../images/logo.png')} />
        </View>
        <View style={containerStyle}>
          {this.renderLinks()}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <FormButton1
              buttonText='Submit'
              onPress={this.onButtonPress.bind(this)}
            />
          </View>
        </View>
      </Image>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  containerStyle: {
    alignItems: 'center',
    marginTop: 120
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: 150,
    height: 150,
    marginTop: 50
  }
};

export default AttachDocs;
