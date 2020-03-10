import React from 'react'
import {View, ScrollView, StyleSheet, Image, Text} from 'react-native'

import Avatar from '../../assets/thor3.jpeg'

function Perfil () {
    return (
        <>
        <ScrollView style={styles.container}>
            <View style={styles.cardPerfil}>
                <Image style={styles.avatar} source={Avatar}/>

                <View style={styles.avatarTituloContainer}>
                    <Text style={styles.avatarLabel}>Thor</Text>
                    <Text style={styles.avatarSubLabel}>Maltês, 2 anos</Text>
                </View>
                
                <View style={styles.petInfo}>
                    <Text style={styles.infoLabel} >Dono: Alisson Oliveira</Text>
                    <Text style={styles.infoLabel}>Cidade: Recife,PE</Text>
                    <Text style={styles.infoLabel}>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam quis sapien ut leo laoreet temp id at nibh. Vivamus mauris sapien, tincidunt sit amet lacinia ut, 
                     sollicitudin nec libero. vestibulum.</Text>
                </View>
                

            </View>

        </ScrollView>
        </>
    )
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
        marginTop: 40
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
        marginLeft: 20
    },
    infoLabel: {
        fontSize: 16,
        color: '#999',
        marginTop: 2
    }
})

export default Perfil;