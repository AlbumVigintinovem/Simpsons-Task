import { useContext, useEffect } from "react";
import { Pressable, Button, Text, View, StyleSheet, Platform, Image, TouchableHighlight } from "react-native";
import { SimpsonsDataContext } from "../store/context/simpsons-data";
import { useNavigation } from '@react-navigation/native'

function SimpsonsList({ imgURL, name, isLoading, id, index, deleteHandler, upHandler, downHandler }) {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions(
            {
                headerRight: () => {
                    return <Button title="Add Simpson" onPress={() => navigation.navigate('AddSimpson')} />
                }
            }
        )
    }, [])

    function selectSimpson() {
        navigation.navigate('SimpsonDetail', {
            simpId: id,
            simpImg: imgURL,
            simpTitle: name,

        });
    }

    return (

        <View style={styles.container}>
            <Pressable onPress={selectSimpson} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]} >
                <View style={styles.simpContainer} >
                    <View style={styles.listSimp}>
                        <View style={styles.listSimp}>
                            <Text style={styles.textSimp}> {index + 1} </Text>
                            <Image source={{ uri: imgURL && imgURL.split("revision")[0] }} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
                            <Text style={styles.textSimp} > {name} </Text>
                        </View>
                        <View style={styles.iconContainer} >
                            <TouchableHighlight onPress={() => upHandler(id)}>
                                <Image source={require('../data/images/up-arrow.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => downHandler(id)}>
                                <Image source={require('../data/images/down-arrow.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => deleteHandler(id)}>
                                <Image source={require('../data/images/trash-bin.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#311b3b',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: '8%',
        paddingHorizontal: 16
    },
    simpContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    listSimp: {
        paddingVertical: 16,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textSimp: {
        color: '#fff',
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export default SimpsonsList;