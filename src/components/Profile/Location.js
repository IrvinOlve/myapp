
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Text } from 'react-native';


export default Location = ({ data }) => {


    return (
        <View style={styles.container}>
            <Ionicons name={'location-sharp'} size={15} color={'#696969'} />
            <Text style={styles.location}> {data} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        top: 10
    },
    location: {
        top: -1,
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 17,
        color: '#696969',
    },
})