import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import BottomNavigator from '../components/BottonNavigation'

import Avatar from '../../assets/thor.jpeg'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'

function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image style={styles.avatar} source={Avatar}/>
                    <View style={styles.footer}>
                        <Text style={styles.name}>Thor</Text>
                        <Text style={styles.bio} numberOfLines={3}>Uma bio Qualquer</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.icon} source={dislike}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.icon} source={like}/>
                </TouchableOpacity>
            </View>
                    </View>
                </View>
            </View>
            <BottomNavigator />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    cardContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 700,
    },

    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 20,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    avatar: {
        flex: 1,
        height: 400,
        width: '100%'
    },

    footer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 1,
        justifyContent: 'center'
    },

    button: {
        
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },

    icon: {
        marginLeft: 14
    }
})

export default Home; 