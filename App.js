import { FlatList, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight, Modal, StatusBar } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsListScreen from './screens/MealsListScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsList" component={MealsListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
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
    borderBottomWidth: 1,
  },
  listSimp: {
    paddingVertical: 16,
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textSimp: {
    color: '#fff'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
