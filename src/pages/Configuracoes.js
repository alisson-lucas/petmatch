import React, { Component } from 'react'
import {View,  ScrollView, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import firebase from 'firebase'

export default class Configuracoes extends Component {
    constructor(props){
        super(props);

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

        this.deslogar = this.deslogar.bind(this)
    }

    deslogar() {
        firebase.auth().signOut();
        this.props.navigation.navigate('Login')
    }


    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.deslogar}>
                <Text style={styles.buttonText}>Sair</Text>
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
        buttonText: {
            fontSize: 25
        }
    });