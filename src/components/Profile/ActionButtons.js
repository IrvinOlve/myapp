
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';


export default ActionButtons = ({ navigation }) => {
    return (
        <View style={{ top: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatScreen')} >
                <Ionicons name={'paper-plane-outline'} size={27} color={'#373737'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Ionicons name={'person-add-outline'} size={27} color={'#373737'} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '47.5%',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        zIndex: 1000,
    }
})