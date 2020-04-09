import React, {Component} from 'react';
import { View,ScrollView, KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase'

import Avatar from '../../assets/thor3.jpeg'
export default class Cadastro extends Component {

  constructor(props){
     super(props);
     this.state = {
        nome: '',
        email: '',
        senha: '',
        nomePet: '',
        raca: '',
        userUid: 0,
        image: this.avatar,
        idade: null
      }
      
      this.cadastrar = this.cadastrar.bind(this);
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

    firebase.auth().signOut();

    
  }
  
  cadastrar() {
    
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        let state = this.state;
        state.userUid = user.uid;
        this.setState(state);
  
        firebase.database().ref('usuarios').child(user.uid).set({
          nome: this.state.nome,
          nomePet: this.state.nomePet,
          raca: this.state.raca,
          idade: this.state.idade
        })

  
        alert('usuário criado com sucesso')
      }
    })


    // this.pegarFoto();

    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.senha
    ).catch((error) => {
      switch (error.code) {
        case 'auth/weak-password' :
          alert('Sua senha precisa ter pelo menos 6 caracteres' )
          break;
        case 'auth/email-already-in-use':
          alert('Ja existe um usuário com este email cadastrado')
          break;
        default:
          alert('Ocorreu um erro')
      }
     
    })

    
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

  uploadImage = async (uri,imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

   
    var ref = firebase.storage().ref().child('images/'+ imageName );
    ref.put(blob).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
  }
  
  render (){
    let { image } = this.state;

    return(

      <ScrollView style={styles.scrollContainer}>
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
        <Text style={styles.titulos}>Dono</Text>
        <Text style={styles.linha}>_________________________________________________________________</Text>
        <TextInput onChangeText={(nome) => this.setState({nome})} style={styles.input} placeholder="Nome" placeholderTextColor="#999"
          autoCapitalize="none" autoCorrect={false}/>
        <TextInput onChangeText={(email) => this.setState({email})} style={styles.input} placeholder="E-mail" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
        <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input} placeholder="Senha" placeholderTextColor="#999" autoCapitalize="none" autoCorrect={false} />
        <Text style={styles.titulos}>Pet</Text>
        <Text style={styles.linha}>_________________________________________________________________</Text>
        <TextInput onChangeText={(nomePet) => this.setState({nomePet})} style={styles.input} placeholder="Nome do Pet" placeholderTextColor="#999"
         autoCapitalize="none" autoCorrect={false}/>
        <View style={styles.inputPetContainer}>
          <View style={styles.inputRacaContainer}>
            <TextInput onChangeText={(raca) => this.setState({raca})} style={styles.inputRaca} placeholder="Raça" placeholderTextColor="#999"
              autoCapitalize="none" autoCorrect={false}/>
            <TextInput keyboardType={'numeric'} onChangeText={(idade) => this.setState({idade})} style={styles.inputRaca} placeholder="Idade" placeholderTextColor="#999"
              autoCapitalize="none" autoCorrect={false}/>
            
          </View>
          <View style={styles.imageSelect}>
          <Image style={styles.avatar} source={{ uri: image }}/>
          <TouchableOpacity onPress={this.escolherImagem} style={styles.imageSelectButton}>
            <Text style={styles.imageSelectText}>Escolher foto</Text>
          </TouchableOpacity>
          </View>
        </View>
            <TouchableOpacity
              onPress={this.cadastrar}
              style={ styles.button }>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          {/* () =>{ this.props.navigation.navigate('Login') && alert('Cadastrado')} */}
    </KeyboardAvoidingView>
    </ScrollView>
  )
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

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  console.log(result);

  if (!result.cancelled) {
    this.setState({ image: result.uri });
    this.uploadImage(result.uri, "test-image")
        .then(() => {
          alert("Success");
        })
        .catch((error) => {
          alert(error);
        });
  }
};


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignSelf: 'center',
      width: '100%'
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    label: {
      alignSelf: 'stretch',
      paddingLeft: 40,
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#444',
      height: 44,
      width: 300,
      marginTop: 5,
      marginBottom: 20,
      borderRadius: 2,
      borderBottomColor: '#f05a5b'
    },
    titulos: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 15,
      // marginTop: 10
    },
    linha: {
        width: 350,
        color: '#a9a9a9',
    },
    button: {
      height: 42,
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
    inputPetContainer: {
      // marginLeft: 60,
      // marginRight: 50,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    inputRacaContainer: {
      alignItems: 'flex-start',
      marginLeft: -17,
          
    },
    inputRaca: {
      borderWidth: 1,
      borderColor: '#fff',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#444',
      height: 44,
      width: 150,
      marginTop: 5,
      marginBottom: 20,
      borderRadius: 2,
      borderBottomColor: '#f05a5b'
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 80/ 2,
      borderWidth: 2,
      borderColor: '#f05a5b',
      marginLeft: 50,
      marginBottom: 10,
      marginTop: 10
      // alignItems: 'center',
      // justifyContent: 'center'
  },
  imageSelect: {
    flexDirection: 'column'
  },
  imageSelectButton:{
    paddingTop: 5,
    paddingLeft: 50,
    
  },
  imageSelectText: {
    color: '#f05a5b'
  }

})

// export default Cadastro; 