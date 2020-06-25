import React, {Component} from 'react';
import { View,ScrollView, KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase'

export default class CadastroFoto extends Component {

    constructor(props){
        super(props);
        this.state = {
           
           userUid: 0,
           image: this.avatar,
         }
         
        //  this.cadastrar = this.cadastrar.bind(this);
         // this.pegarFoto = this.pegarFoto.bind(this);
   
        let firebaseConfig = {
         apiKey: "AIzaSyCrIguFGp_DyKYvsf5u7ODgmZ_UCxG9Z70",
         authDomain: "petmatch-d1a3f.firebaseapp.com",
         databaseURL: "https://petmatch-d1a3f.firebaseio.com",
         projectId: "petmatch-d1a3f",
         storageBucket: "petmatch-d1a3f.appspot.com",
         messagingSenderId: "565679450859",
         appId: "1:565679450859:web:16519f1a7d127abd26ecae",
         measurementId: "G-9RD1PPG59L"
       };
       // Initialize Firebase
       if (!firebase.apps.length) {
       firebase.initializeApp(firebaseConfig);
       // firebase.analytics();
       }
       
    }

    

    escolherImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();
        
        
        if(!result.cancelled) {
          this.setState({ image: result.uri });
          this.uploadImage(result.uri, 'testImage')
          // .then(() => {
          //   alert("Success");
          // })
          // .catch((error) => {
          //   alert(error);
          // });
        }
    }

    continuar(navigation) {
       navigation = this.props.navigation.navigate('Home')
    }

    uploadImage = async (uri,imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
    
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                let state = this.state;
                state.userUid = user.uid;
                this.setState(state);

                var ref = firebase.storage().ref().child(user.uid).child('images/'+ imageName );
                ref.put(blob).then(function(snapshot) {
                console.log('Uploaded a blob or file!');
                });
            }
        })
    }

    componentDidMount() {
        this.getPermissionAsync();
        // console.log('hi');
      }
      
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
    }

    render(){
        let { image } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.Titulo}>Selecionar foto do perfil</Text>
                </View>
                <View style={styles.textoContainer}>
                    <Text style={styles.texto}> Agora que você ja se cadastrou no Petmatch escolha uma foto bem bonita do seu pet
                        para todo mundo poder vê-lo:</Text>
                </View>
                <View style={styles.imageSelect}>
                    <Image style={styles.avatar} source={{ uri: image }}/>
                    <TouchableOpacity onPress={this.escolherImagem} style={styles.imageSelectButton}>
                        <Text style={styles.imageSelectText}>Escolher foto</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() =>{ this.props.navigation.navigate('Home')}} style={ styles.button }>
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        // marginTop: -10,
        // marginBottom: 50,
        paddingBottom: 50
    },
    textoContainer: {
        marginLeft: 20,
        width: 300,
        paddingBottom: 25
    },
    Titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f05a5b'
    },
    texto: {
        fontSize: 16
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 150/ 2,
        borderWidth: 2,
        borderColor: '#f05a5b',
        marginLeft: 50,
        marginBottom: 10,
        // marginTop: 10
        
    },
    imageSelect: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: -35,
        paddingTop: 25
    },
    imageSelectButton: {
        paddingTop: 5,
        paddingLeft: 50,
        
    },
    imageSelectText: {
        color: '#f05a5b',
        fontSize: 17
    },
    button: {
        height: 42,
        marginTop: 120,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        height: 47,
        width: 300,
        borderRadius: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
})