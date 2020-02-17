import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


function Login() {
    return (
        <View style={styles.container}>
      <Text style={styles.titulo}>Nome do app</Text>
      <TextInput style={styles.login}/>
      <TextInput style={styles.login}/>
    
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={ styles.botao }>
        <Text style={{ fontSize: 20, color: '#fff' }}>Entrar</Text>
      </TouchableOpacity>
    </View>
    )
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF6347',
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
    botao: {
      height: 30,
      marginTop: 10
    }
  });

 


export default Login; 