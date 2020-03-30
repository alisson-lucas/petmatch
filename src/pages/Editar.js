import React, { Component } from 'react'
import {View, KeyboardAvoidingView,  ScrollView, StyleSheet, Image, Text,TextInput, TouchableOpacity} from 'react-native'
import firebase from 'firebase'

import Avatar from '../../assets/thor3.jpeg'

export default class Configuracoes extends Component {

    constructor(props){
        super(props);
        this.state = {
           nome: '',
           email: '',
           senha: '',
           nomePet: '',
           raca: '',
           biografia: '',
           userUid: 0,
           image: this.avatar,
           idade: null
         }
         
         this.editar = this.editar.bind(this);
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

    editar() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
              let state = this.state;
              state.userUid = user.uid;
              this.setState(state);
                
                firebase.database().ref('usuarios').child(user.uid).child('nome').set(this.state.nome)

                firebase.database().ref('usuarios').child(user.uid).child('cidade').set(this.state.cidade)

                firebase.database().ref('usuarios').child(user.uid).child('estado').set(this.state.estado)

                firebase.database().ref('usuarios').child(user.uid).child('nomePet').set(this.state.nomePet)

                firebase.database().ref('usuarios').child(user.uid).child('raca').set(this.state.raca)

                firebase.database().ref('usuarios').child(user.uid).child('idade').set(this.state.idade)

                firebase.database().ref('usuarios').child(user.uid).child('biografia').set(this.state.biografia)
                
                alert('usuário editado com sucesso')
        
            }
          })
    }

    render () {
        return (
            <ScrollView style={styles.scrollContainer}>
            <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={Avatar}/>
                    <TouchableOpacity style={styles.imageSelectButton}>
                        <Text style={styles.imageSelectText}>Alterar foto</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={(nome) => this.setState({nome})} style={styles.input} placeholder="Nome do dono" placeholderTextColor="#999"
                     autoCorrect={false}/>
                    <View style={styles.inputDuploContainer}>
                        <TextInput onChangeText={(cidade) => this.setState({cidade})} style={styles.inputCidade} placeholder="Cidade" placeholderTextColor="#999"
                        autoCorrect={false}/>
                        <TextInput onChangeText={(estado) => this.setState({estado})} style={styles.inputEstado} placeholder="Estado" placeholderTextColor="#999"
                        autoCorrect={false}/>
                    </View>
                    <TextInput onChangeText={(nomePet) => this.setState({nomePet})} style={styles.input} placeholder="Nome do pet" placeholderTextColor="#999"
                     autoCorrect={false}/>
                    <View style={styles.inputDuploContainer}>
                        <TextInput onChangeText={(raca) => this.setState({raca})} style={styles.inputCidade} placeholder="Raça" placeholderTextColor="#999"
                        autoCorrect={false}/>
                        <TextInput onChangeText={(idade) => this.setState({idade})} style={styles.inputEstado} placeholder="Idade" placeholderTextColor="#999"
                        autoCorrect={false}/>
                    </View> 
                    <TextInput onChangeText={(biografia) => this.setState({biografia})} style={styles.inputBiografia} placeholder="Biografia" placeholderTextColor="#999"
                     autoCorrect={false}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                    onPress={this.editar}
                    style={ styles.button }>
                    <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: '100%'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 80/ 2,
        borderWidth: 2,
        borderColor: '#f05a5b',
        marginTop: 50
        
    },
    imageSelectButton:{
        paddingTop: 10,
    },
    imageSelectText: {
        color: '#f05a5b'
    },
    buttonText: {
        fontSize: 25
    },
    inputContainer: {
        paddingTop: 50,
        alignItems: 'center'
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
    inputCidade: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#444',
        height: 44,
        width: 170,
        marginTop: 5,
        marginBottom: 20,
        // marginLeft: ,
        borderRadius: 2,
        borderBottomColor: '#f05a5b',
    },
    inputEstado: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#444',
        height: 44,
        width: 90,
        marginTop: 5,
        marginBottom: 20,
        marginLeft: 40,
        borderRadius: 2,
        borderBottomColor: '#f05a5b',
    },
    inputDuploContainer: {
        flexDirection: 'row'
    },
    inputBiografia: {
        borderWidth: 1,
        borderColor: '#f05a5b',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#444',
        height: 100,
        width: 300,
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 2,
        borderBottomColor: '#f05a5b',
    },
    buttonContainer: {
        alignItems: 'center'
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