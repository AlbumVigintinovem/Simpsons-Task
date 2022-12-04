import { useLayoutEffect, useContext } from "react";
import { Text, View, Image, StyleSheet, Button, Pressable } from "react-native";
import IconButton from "../components/IconButton";
import { SimpsonsDataContext } from "../store/context/simpsons-data";

function SimpsonDetailScreen({ route, navigation }) {

    const simpsonsCtx = useContext(SimpsonsDataContext);

    const simpId = route.params.simpId;
    const selectedSimpson = simpsonsCtx.simpsonsData?.find((simpson) => simpson.id === simpId);

    const pressHandler = () => {
        console.log("PRESSED 1")
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="black" onPress={pressHandler} />
            }
        });
    }, [])
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}  >
                <View style={styles.simpContainer} >
                    <Image source={{ uri: selectedSimpson && selectedSimpson.avatar.split("revision")[0] }} style={{ width: 240, height: 240, resizeMode: 'contain' }} />
                    <Text style={styles.textSimp} > {selectedSimpson && selectedSimpson.name} </Text>
                    <Text style={styles.jobSimp} > {selectedSimpson && selectedSimpson.job} </Text>
                    <Text style={styles.descSimp} > {selectedSimpson && selectedSimpson.description} </Text>
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

export default SimpsonDetailScreen;