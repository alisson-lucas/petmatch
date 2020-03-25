import React, { Component } from 'react'
import {View,  ScrollView, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
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
           descricao: '',
           userUid: 0,
           image: this.avatar,
           idade: null
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

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={Avatar}/>
                    <TouchableOpacity style={styles.imageSelectButton}>
                        <Text style={styles.imageSelectText}>Alterar foto</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    
                </View>
            </View>
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
    }
});