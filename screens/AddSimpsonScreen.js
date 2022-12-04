import { useLayoutEffect, useContext } from "react";
import { Text, View, Image, StyleSheet, Button, Pressable } from "react-native";
import AddSimpson from "../components/AddSimpson";
import IconButton from "../components/IconButton";
import { SimpsonsDataContext } from "../store/context/simpsons-data";

function AddSimpsonScreen({ route, navigation }) {

    return (
        <View style={styles.container}>
            <AddSimpson />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#311b3b',
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
    jobSimp: {
        color: '#fff',
        fontSize: 20,
        marginTop: 16,
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
})

export default AddSimpsonScreen;