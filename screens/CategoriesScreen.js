import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        const pressHandler = () => {
            navigation.navigate('MealsList', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2} />
    );
}

export default CategoriesScreen;