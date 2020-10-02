
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Text } from 'react-native';

import styles from './styles'

export default Location = ({ data }) => {


    return (
        <View style={styles.locationContainer}>
            <Ionicons name={'location-sharp'} size={15} color={'#696969'} />
            <Text style={styles.location}> {data} </Text>
        </View>
    );
}
