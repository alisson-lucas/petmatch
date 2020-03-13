import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import BottomNavigator from '../components/BottonNavigation'

import petShop1 from '../../assets/petShop1.jpg'
import petShop2 from '../../assets/petShop2.jpg'
import petShop3 from '../../assets/petShop3.jpg'
import petShop4 from '../../assets/petShop2.jpg'
import { setLightEstimationEnabled } from 'expo/build/AR'

function Locais() {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
           const { granted } = await requestPermissionsAsync();

           if (granted) {
               const {coords} = await getCurrentPositionAsync({
                   enableHighAccuracy: true
            })

            const { latitude, longitude } = coords;

            setCurrentRegion({
                latitude,
                longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04,
            })
           }
        }

        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <View style={styles.container}>
            <MapView initialRegion={currentRegion} style={styles.map}>
                <Marker coordinate={{latitude: -8.0521253 , longitude: -34.8969381}}>
                    <Image style={styles.avatar} source={petShop2} />

                    <Callout>
                        <View style={styles.callout}>
                            <Text style={styles.name}>petShop2</Text>
                            <Text style={styles.bio}>Servicos de pet shop</Text>
                            <Text styles={styles.services}>Banho, Tosa, Hotelzinho</Text>
                        </View>
                    </Callout>
                </Marker>
                <Marker coordinate={{latitude: -8.0486622 , longitude: -34.904813}}>
                    <Image style={styles.avatar} source={petShop1} />

                    <Callout>
                        <View style={styles.callout}>
                            <Text style={styles.name}>petShop1</Text>
                            <Text style={styles.bio}>Os melhores servicos de pet shop</Text>
                            <Text styles={styles.services}>Banho, Tosa, Hotelzinho</Text>
                        </View>
                    </Callout>
                </Marker>
                <Marker coordinate={{latitude: -8.0353539, longitude: -34.8787105}}>
                    <Image style={styles.avatar} source={petShop3} />

                    <Callout>
                        <View style={styles.callout}>
                            <Text style={styles.name}>petShop3</Text>
                            <Text style={styles.bio}>Servicos de pet shop melhorados</Text>
                            <Text styles={styles.services}>Banho, Tosa, Hotelzinho</Text>
                        </View>
                    </Callout>
                </Marker>
                <Marker coordinate={{latitude: -7.9403394, longitude: -34.8846336}}>
                    <Image style={styles.avatar} source={petShop2} />

                    <Callout>
                        <View style={styles.callout}>
                            <Text style={styles.name}>petShop2 Paulista</Text>
                            <Text style={styles.bio}>Servicos de pet shop melhorados</Text>
                            <Text styles={styles.services}>Banho, Tosa, Hotelzinho</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            {/* <BottomNavigator /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'space-between'
    },
    map: {
        flex: 1,
        
    },

    avatar: {
        
        width: 54,
        height: 54,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#fff'
    },

    callout: {
        width: 260
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16
    },

    bio: {
        color: '#666',
        marginTop: 5
    },

    services: {
        marginTop: 5
    }
})

export default Locais;