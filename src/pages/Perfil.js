import React, { Component } from 'react'
import {View, ScrollView, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase'

import Avatar from '../../assets/thor3.jpeg'
import FeedFoto from '../../assets/thor.jpeg'
import FeedFoto2 from '../../assets/thor2.jpeg'
import FeedFoto3 from '../../assets/thor3.jpeg'
import FeedFoto4 from '../../assets/thor4.jpeg'

export default class Perfil extends Component {

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
   
       firebase.auth().onAuthStateChanged((user) => {
        if(user){
            firebase.database().ref('usuarios').child(user.uid).on('value', (snapshot) => {
                let state = this.state;
                state.nome = snapshot.val().nome;
                state.nomePet = snapshot.val().nomePet;
                state.raca = snapshot.val().raca;
                state.idade = snapshot.val().idade;
                this.setState(state);
            })
  
    
        }
      })
       
     }
    
    render(){

        return (
            <>
            <ScrollView style={styles.container}>
                <View style={styles.cardPerfil}>
                    <View style={styles.optBotoes}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Configuracoes') }}>
                         <Ionicons style={styles.btnSettings} name="md-settings" size={32}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Editar') }}>
                          <Ionicons style={styles.btnEdit} name="md-create" size={32}/>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.avatar} source={Avatar}/>
    
                    <View style={styles.avatarTituloContainer}>
                        <Text style={styles.avatarLabel}>{this.state.nomePet}</Text>
                        <Text style={styles.avatarSubLabel}>{this.state.raca}, {this.state.idade} anos</Text>
                    </View>
                    
                    <View style={styles.petInfo}>
                        <Text style={styles.infoLabel} >Dono: {this.state.nome}</Text>
                        <Text style={styles.infoLabel}>Cidade: Recife,PE</Text>
                        <Text style={styles.infoLabel}>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Etiam quis sapien ut leo laoreet temp id at nibh. Vivamus mauris sapien, tincidunt sit amet lacinia ut, 
                         sollicitudin nec libero. vestibulum.</Text>
                    </View>
                </View>
                <View style={styles.fotosFeedContainer}>
                    <Image style={styles.fotosFeed} source={FeedFoto}/>
                    <Image style={styles.fotosFeed} source={FeedFoto2}/>
                    <Image style={styles.fotosFeed} source={FeedFoto3}/>
                    <Image style={styles.fotosFeed} source={FeedFoto4}/>
                </View>
    
            </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'space-between'
    },
    cardPerfil: {
        // flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: 400,
        borderWidth: 0.8,
        borderColor: '#fff',
        borderBottomColor: '#D3D3D3'
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 120/ 2,
        borderWidth: 2,
        borderColor: '#f05a5b',
        marginLeft: 125,
        marginTop: 10
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    avatarTituloContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    avatarLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    avatarSubLabel: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
    },
    petInfo: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    infoLabel: {
        fontSize: 16,
        color: '#999',
        marginTop: 2,
    },
    optBotoes: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'stretch'
    },
    btnSettings: {
        alignSelf: 'flex-end'
    },
    btnEdit: {
        marginTop: -35,
        alignSelf: 'flex-start'
    },
    fotosFeedContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    fotosFeed: {
        width: 123,
        height: 123,
        margin: 1
    }
})

// export default Perfil;