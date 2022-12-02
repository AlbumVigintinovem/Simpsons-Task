import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight, Modal } from 'react-native';
import { CATEGORIES } from './data/dummyData';
import { MEALS } from './data/dummyData';
import axios from 'axios';
import { nanoid } from 'nanoid';
import NewSimp from './models/NewSimp';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();



export default function App() {

  const [simpsons, setSimpsons] = useState();
  const [loading, setLoading] = useState(true);


  function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  };


  const upHandler = (id_) => {
    console.log(simpsons.map(e => e.id).indexOf(id_))
    array_move(simpsons, simpsons.map(e => e.id).indexOf(id_), simpsons.map(e => e.id).indexOf(id_) - 1);
    console.log(simpsons.map(e => e.id).indexOf(id_))


  }
  const downHandler = (id_) => {
    console.log(simpsons.map(e => e.id).indexOf(id_))
    array_move(simpsons, simpsons.map(e => e.id).indexOf(id_), simpsons.map(e => e.id).indexOf(id_) + 1);
    console.log(simpsons.map(e => e.id).indexOf(id_))
  }
  const deleteHandler = (id_) => {
    setSimpsons(
      simpsons.filter(
        e => e.id != id_
      )
    )
  }



  useEffect(() => {
    axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
      .then((res) => setSimpsons(res.data)).finally(() => setLoading(false));

  }, [])


  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={NewSimp} />
        </Stack.Navigator>
        <Modal style={styles.container}>
          <View style={styles.container}>
            <Text>Hello World!!!!</Text>
            <Text> {CATEGORIES[0].title} </Text>
            {/* <ScrollView>
        {CATEGORIES.map((category) => <Text> {category.id} </Text>)}
        {MEALS.map((meal) => <Image source={{ uri: meal.imageUrl }} style={{ width: 400, height: 400 }} />)}
      </ScrollView> */}
            {loading === true ?
              <Text>Yükleniyor..</Text> :
              <ScrollView>
                {simpsons && simpsons.map((simp, index) =>
                  <View style={styles.simpContainer} key={index} >
                    <View style={styles.listSimp}>
                      <Text style={styles.textSimp}> {index + 1} </Text>
                      <Image source={{ uri: simp.avatar.split("revision")[0] }} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
                      <Text style={styles.textSimp} > {simp.name} </Text>
                    </View>
                    <View style={styles.iconContainer} >
                      <TouchableHighlight onPress={() => upHandler(simp.id)}>
                        <Image source={require('./data/images/up-arrow.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                      </TouchableHighlight>
                      <TouchableHighlight onPress={() => downHandler(simp.id)}>
                        <Image source={require('./data/images/down-arrow.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                      </TouchableHighlight>
                      <TouchableHighlight onPress={() => deleteHandler(simp.id)}>
                        <Image source={require('./data/images/trash-bin.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                      </TouchableHighlight>
                    </View>
                  </View>
                )}
              </ScrollView>}

            {/* <NewSimp /> */}
          </View>
        </Modal>
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
