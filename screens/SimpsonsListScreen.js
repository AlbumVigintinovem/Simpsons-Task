import { FlatList } from "react-native";
import SimpsonsList from "../components/SimpsonsList";
import { useContext, useLayoutEffect } from "react";
import { SimpsonsDataContext } from "../store/context/simpsons-data";

function SimpsonsListScreen({ navigation }) {

    const simpsonsCtx = useContext(SimpsonsDataContext);


    function renderCategoryItem(itemData) {
        const pressHandler = () => {
            navigation.navigate('SimpsonsList', {
                simpId: itemData.item.id,
            });
        }


        return (
            <SimpsonsList
                id={itemData.item.id}
                name={itemData.item.name}
                desc={itemData.item.description}
                imgURL={itemData.item.avatar}
                isLoading={simpsonsCtx.loading}
                index={simpsonsCtx.simpsonsData.map(e => e.name).indexOf(itemData.item.name)}
                deleteHandler={simpsonsCtx.deleteHandler}
                upHandler={simpsonsCtx.upHandler}
                downHandler={simpsonsCtx.downHandler}

            />
        );
    }

    return (
        <FlatList
            data={simpsonsCtx.simpsonsData}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={1}
            extraData={simpsonsCtx.simpsonsData}
        />
    );
}


export default SimpsonsListScreen;