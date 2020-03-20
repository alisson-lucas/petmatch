import React, {Component} from 'react';
import { View,ScrollView, KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import firebase from 'firebase'
export default class Cadastro extends Component {

  constructor(props){
     super(props);
     this.state = {
        nome: '',
        email: '',
        senha: '',
        nomePet: '',
        raca: ''
      }
      
      this.cadastrar = this.cadastrar.bind(this);

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
      if(user){
        firebase.database().ref('usuarios').child(user.uid).set({
          nome: this.state.nome,
          nomePet: this.state.nomePet,
          raca: this.state.raca
        })

        alert('usuário criado com sucesso')
      }
    })

  }

  cadastrar() {
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
  
  render (){

    return(
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
        <TextInput onChangeText={(raca) => this.setState({raca})} style={styles.input} placeholder="Raça" placeholderTextColor="#999"
          autoCapitalize="none" autoCorrect={false}/>
          <TouchableOpacity
            onPress={this.cadastrar}
            style={ styles.button }>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          {/* () =>{ this.props.navigation.navigate('Login') && alert('Cadastrado')} */}
    </KeyboardAvoidingView>
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
    }

})

// export default Cadastro; 