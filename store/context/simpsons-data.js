import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const SimpsonsDataContext = createContext({
    simpsonsData: [],
    newSimpsonsData: [],
    deleteHandler: (id) => { },
    upHandler: (id) => { },
    downHandler: (id) => { },
    simpsonsStorageData: [],
    navigation: () => { },
    setSimpsons: () => { },

});

function SimpsonsDataContextProvider({ children }) {

    const navigation = useNavigation();


    function array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    };

    const [simpsons, setSimpsons] = useState([]);
    const [newSimpsons, setNewSimpsons] = useState([]);
    const [loading, setLoading] = useState();
    const [simpsonsStorage, setSimpsonsStorage] = useState();


    //Delete Character
    const deleteHandler = (id) => {
        const filteredSimpsons = simpsons.filter(e => e.id != id);
        setSimpsons(filteredSimpsons)
        AsyncStorage.setItem("@simpsonsStorage", JSON.stringify(filteredSimpsons));
    }

    //Move Up Character
    const upHandler = (id_) => {
        array_move(simpsons, simpsons.map(e => e.id).indexOf(id_), simpsons.map(e => e.id).indexOf(id_) === 0 ? simpsons.map(e => e.id).indexOf(id_) : simpsons.map(e => e.id).indexOf(id_) - 1);
        setSimpsons(
            [...simpsons]
        )
        AsyncStorage.setItem("@simpsonsStorage", JSON.stringify(simpsons));


    }
    //Move Down Character
    const downHandler = (id_) => {
        array_move(simpsons, simpsons.map(e => e.id).indexOf(id_), simpsons.map(e => e.id).indexOf(id_) + 1 === simpsons.length ? simpsons.map(e => e.id).indexOf(id_) : simpsons.map(e => e.id).indexOf(id_) + 1);
        setSimpsons(
            [...simpsons]
        )
        AsyncStorage.setItem("@simpsonsStorage", JSON.stringify(simpsons));
    }

    async function getStorage() {
        const value = await AsyncStorage.getItem('@simpsonsStorage')
        if (value) {
            setSimpsons(JSON.parse(value))
            return;
        } else {
            axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
                .then((res) => setSimpsons(res.data)).finally(() => setLoading(false));
        }

    }


    useEffect(() => {
        getStorage()
    }, []);

    const value = {
        simpsonsData: simpsons,
        newSimpsonsData: newSimpsons,
        deleteHandler: deleteHandler,
        upHandler: upHandler,
        downHandler: downHandler,
        simpsonsStorageData: simpsonsStorage,
        navigation: navigation,
        setSimpsons: setSimpsons,
    }

    return (
        <SimpsonsDataContext.Provider value={value} >
            {children}
        </SimpsonsDataContext.Provider>)
}

export default SimpsonsDataContextProvider