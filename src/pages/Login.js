import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import Logo from '../../assets/logo.png'

function Login({navigation}) {
    return (
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
        <Image source={Logo} />
        <Text style={styles.label}>SEU USUÁRIO *</Text>
      <TextInput style={styles.input} placeholder="Seu usuario" placeholderTextColor="#999" keyboardType="email-address"
      autoCapitalize="none" autoCorrect={false}/>
        <Text style={styles.label}>SUA SENHA *</Text>
      <TextInput style={styles.input} placeholder="Sua senha" placeholderTextColor="#999" autoCapitalize="none" autoCorrect={false} />
    
      <TouchableOpacity
        onPress={() => alert('Sem tela pronta! ainda ;)')}
        style={ styles.button }>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { navigation.navigate('Cadastro') }}>
        <Text style={styles.cadastroLabel}>Não tem cadastro? Clique aqui</Text>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
    )
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

 


export default Login; 