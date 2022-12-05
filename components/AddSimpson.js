import { Text, StyleSheet, TextInput, View, ScrollView, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from "react";
import { SimpsonsDataContext } from "../store/context/simpsons-data";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AddSimpson() {

    const simpsonsCtx = useContext(SimpsonsDataContext);


    const [nameSurname, setNameSurname] = useState();
    const [jobTitle, setJobTitle] = useState();
    const [description, setDescription] = useState();
    const [imgURL, setImgURL] = useState();


    const navigation = useNavigation();

    const addHandler = async () => {
        if (nameSurname.trim() == "") {
            Alert.alert("Please Fill the Name");
        } else if (jobTitle.trim() == "") {
            Alert.alert("Please Fill the Job Title");
        } else if (description.trim() == "") {
            Alert.alert("Please Fill the About");
        }

        else {
            await simpsonsCtx.setSimpsons(
                current => [...current, { id: simpsonsCtx.simpsonsData.length + 1, name: nameSurname, avatar: imgURL, about: description, job: jobTitle }]
            )
            AsyncStorage.setItem("@simpsonsStorage", JSON.stringify(simpsonsCtx.simpsonsData));
            navigation.pop();
        }

        console.log(nameSurname + " " + jobTitle, " " + description + " " + imgURL);
    }

    return (
        <ScrollView style={styles.container} >
            <Text style={styles.text} >Name Surname:</Text>
            <TextInput style={styles.inputContainer} label="Desciption" onChangeText={(e) => setNameSurname(e)} />
            <Text style={styles.text} >Job Title:</Text>
            <TextInput style={styles.inputContainer} label="Desciption" onChangeText={(e) => setJobTitle(e)} />
            <Text style={styles.text} >About Him/Her:</Text>
            <TextInput style={styles.inputDescContainer} label="Desciption" multiline onChangeText={(e) => setDescription(e)} />
            <Text style={styles.text} >Image Link:</Text>
            <TextInput style={styles.inputContainer} label="Desciption" onChangeText={(e) => setImgURL(e)} />
            <Button title="Add Character" onPress={addHandler} />
        </ScrollView>
    )
}

export default AddSimpson;

const styles = StyleSheet.create({
    container: {

    },
    text: {
        color: '#fff',
        marginTop: 16,
    },
    inputDescContainer: {
        textAlign: 'start',
        alignItems: 'flex-start',
        marginTop: 16,
        height: 150,
        width: 350,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#dfdfdf"
    },
    inputContainer: {
        textAlign: 'start',
        alignItems: 'flex-start',
        marginTop: 16,
        height: 35,
        width: 350,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#dfdfdf"
    },


})