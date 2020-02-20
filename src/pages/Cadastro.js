import React from 'react';
import { View, KeyboardAvoidingView, Text, StyleSheet, TextInput } from 'react-native';

function Cadastro() {
    return (
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
            <Text style={styles.titulos}>Dono</Text>
            <View style={styles.linha}/>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#999" keyboardType="email-address"
            autoCapitalize="none" autoCorrect={false}/>
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" autoCapitalize="none" autoCorrect={false} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
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
      marginTop: 10
    },
    linha: {
        borderBottomColor: '#999',
        borderWidth: 1,
        width: 350
        
    }

})

export default Cadastro; 