import React from 'react';
import { View, KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function Cadastro({navigation}) {
  
  return (
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
            <Text style={styles.titulos}>Dono</Text>
            <Text style={styles.linha}>_________________________________________________________________</Text>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#999"
            autoCapitalize="none" autoCorrect={false}/>
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" autoCapitalize="none" autoCorrect={false} />
            <Text style={styles.titulos}>Pet</Text>
            <Text style={styles.linha}>_________________________________________________________________</Text>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#999"
            autoCapitalize="none" autoCorrect={false}/>
            <TextInput style={styles.input} placeholder="Raça" placeholderTextColor="#999"
            autoCapitalize="none" autoCorrect={false}/>
            <TouchableOpacity
              onPress={() =>{ navigation.navigate('Login') && alert('Cadastrado')}}
              style={ styles.button }>
              <Text style={styles.buttonText}>Cadastrar</Text>
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

export default Cadastro; 