import React, {useState, useEffect, useRef} from 'react'
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Modal, Image } from 'react-native'
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

function CameraScreen() {
    const camRef = useRef(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [hasPermission, setHasPermission] = useState(null)
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        (async () => {
           const { status } = await Camera.requestPermissionsAsync();
           setHasPermission(status === 'granted') 
        })();
    }, []);

    if(hasPermission === null) {
        return <View /> 
    }

    if(hasPermission === false) {
        return <Text> Acesso negado! </Text>
    }

    async function takePicture() {
        if(camRef) {
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri)
            setOpen(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camRef}/>
            <View style={styles.buttonCameraContainer}>
                <TouchableOpacity style={styles.buttonFlip} onPress={ () => { setType( type === Camera.Constants.Type.back
                     ? Camera.Constants.Type.front : Camera.Constants.Type.back) }}>
                    <Ionicons name="ios-repeat" size={45} />
                </TouchableOpacity>
                <View style={styles.buttonFotoContainer}>

                <TouchableOpacity style={styles.buttonFoto} onPress={takePicture}>
                    <Ionicons name="ios-radio-button-off" size={70} color="#f05a5b" />
                </TouchableOpacity>
                </View>
            </View>
            { capturedPhoto && 
                <Modal animationType= 'slide' transparent={false} visible={open}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={{margin: 10}} onPress={ () => setOpen(false)} >
                            <Ionicons name= "ios-close-circle" size={50} color="#ff0000" />
                        </TouchableOpacity>
                        <Image style={styles.fotoModal} source={{uri: capturedPhoto}} />
                    </View>
                </Modal>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    camera: {
        flex: 1
    },
    buttonCameraContainer: {
        // flex: 1,
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'row',
        
    },
    buttonFlip: {
        // position: 'absolute',
        bottom: 20,
        left: 20,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
        
    },
    buttonFoto: {
        // position: 'relative',
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginLeft: 160
    },
    buttonFotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 125
        // alignSelf: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    fotoModal: {
        width: '100%',
        height: 500,

    }
});
export default CameraScreen;