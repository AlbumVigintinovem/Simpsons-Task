import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Pressable, Text, View, StyleSheet, Platform, Image } from "react-native";

function SimpsonsDetails({ desc, imgURL, name, onPress, isLoading }) {



    return (

        <View style={styles.container}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}  >
                <View style={styles.simpContainer} >
                    <Image source={{ uri: imgURL && imgURL.split("revision")[0] }} style={{ width: 240, height: 240, resizeMode: 'contain' }} />
                    <Text style={styles.textSimp} > {name} </Text>
                    <Text style={styles.descSimp} > {desc} </Text>
                </View>
            </Pressable>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#311b3b',
        alignItems: 'baseline',
        justifyContent: 'center',
        paddingTop: '8%',
        paddingHorizontal: 16
    },
    simpContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    listSimp: {
        paddingVertical: 16,
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textSimp: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
    },
    descSimp: {
        textAlign: 'justify',
        color: '#fff',
        marginTop: 16,
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export default SimpsonsDetails;