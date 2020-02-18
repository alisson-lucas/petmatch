import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


function Login() {
    return (
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Text style={styles.titulo}>Nome do app</Text>
      <TextInput style={styles.input} placeholder="Seu e-mail" placeholderTextColor="#999" keyboardType="email-address"
      autoCapitalize="none" autoCorrect={false}/>
      <TextInput style={styles.input} placeholder="Sua senha" placeholderTextColor="#999" autoCapitalize="none" autoCorrect={false} />
    
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={ styles.button }>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    )
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f05a5b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontWeight: "bold",
      fontSize: 32,
      color: '#fff'
    },
    login: {
      backgroundColor: '#fff',
      height: 40,
      width: 200,
      paddingLeft: 6,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1 
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#444',
      height: 44,
      width: 200,
      marginBottom: 20,
      borderRadius: 2
    },
    button: {
      height: 42,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      height: 44,
      width: 200,
      borderRadius: 2,
    },
    buttonText: {
      color: '#f05a5b',
      fontWeight: 'bold',
      fontSize: 16,
    }
    
  });

 


export default Login; 