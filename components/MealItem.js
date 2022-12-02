import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native";

function MealItem({ title, imgURL }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{ uri: imgURL }} style={styles.image} resizeMode="contain" />
                    <Text style={styles.title} > {title} </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default MealItem;