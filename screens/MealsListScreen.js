import { MEALS } from "../data/dummyData";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsListScreen({ route }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} imgURL={itemData.item.imageUrl} />;
    }
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsListScreen;