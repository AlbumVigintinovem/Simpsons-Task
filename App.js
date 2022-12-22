import { StyleSheet, Text, StatusBar, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SimpsonsListScreen from './screens/SimpsonsListScreen';
import SimpsonDetailScreen from './screens/SimpsonDetailScreen';
import SimpsonsDataContextProvider, { SimpsonsDataContext } from './store/context/simpsons-data';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddSimpsonScreen from './screens/AddSimpsonScreen';
import { useContext } from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const BottomTabs = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="SimpsonsList" component={SimpsonsListScreen}
//       // options={
//       //   {
//       //     headerRight: () => {
//       //       return <Button title="Add Simpson" onPress={menuHandler} />
//       //     }
//       //   }
//       // }
//       />
//       <Drawer.Screen name='AddSimpson' component={AddSimpsonScreen} />
//     </Drawer.Navigator>
//   )
// }




export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <SimpsonsDataContextProvider>
          <Stack.Navigator>
            <Stack.Screen name="SimpsonsList" component={SimpsonsListScreen} />
            {/* <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} /> */}
            <Stack.Screen name="SimpsonDetail" component={SimpsonDetailScreen} />
            <Stack.Screen name="AddSimpson" component={AddSimpsonScreen} />
          </Stack.Navigator>
        </SimpsonsDataContextProvider>
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
