import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import firebase from 'firebase'

import Logo from '../../assets/logo.png'

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
    }

    this.logar = this.logar.bind(this)

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

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        firebase.database().ref('usuarios').child(user.uid).once('value').then((snapshot)=> {
          let nomePet = snapshot.val().nomePet;

          alert('seja bem vindo' + nomePet)
        })

        this.props.navigation.navigate('Home')
      }
    });

  }

  logar() {
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.senha
    ).catch((error) => {

      switch (error.code) {
        case 'auth/wrong-password' :
          alert('Senha está errada ou o usuário não possui uma senha' )
          break;
        case 'auth/invalid-email':
          alert('O e-mail é invalido ou está vazio')
          break;
        default:
          alert('Ocorreu um erro')
      }
    })
  }

  render(){ 
    return (
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
          <Image source={Logo} />
          <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput style={styles.input} placeholder="Seu e-mail" placeholderTextColor="#999" keyboardType="email-address"
        onChangeText={(email) => this.setState({email})} autoCapitalize="none" autoCorrect={false}/>
          <Text style={styles.label}>SUA SENHA *</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Sua senha" placeholderTextColor="#999"
        onChangeText={(senha) => this.setState({senha})} autoCapitalize="none" autoCorrect={false} />
        
        <TouchableOpacity
          onPress={this.logar}
          style={ styles.button }>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('Cadastro') }}>
          <Text style={styles.cadastroLabel}>Não tem cadastro? Clique aqui</Text>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
      // () => { navigation.navigate('Cadastro') }
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
    cadastroLabel: {
      marginTop: 15,
      fontSize: 16,
      color: '#f05a5b'
    },
    login: {
      backgroundColor: '#fff',
      height: 40,
      width: 200,
      paddingTop: 30,
      paddingLeft: 6,
      marginTop: 20,
      marginBottom: 10,
      borderWidth: 1 
    },
    label: {
      alignSelf: 'stretch',
      paddingLeft: 40,
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#444',
      height: 44,
      width: 300,
      marginTop: 5,
      marginBottom: 20,
      borderRadius: 2
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
    
  });

 


// export default Login; 