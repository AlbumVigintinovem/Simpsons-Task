import { FlatList, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';

const NewSimp = () => {

    return (
        <Modal style={styles.container} >
            <Text >Add to New Simp</Text>
        </Modal>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 1
    }
})

export default NewSimp