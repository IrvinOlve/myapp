
import React, { Component } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default Section = (props) => {

    const { children, title, rightButton, onPress } = props;


    return (
        <>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    {title}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.sectionButton}>
                        {rightButton === null ? null : rightButton}
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionChild}> {children} </Text>
        </>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionTitle: {
        alignSelf: 'flex-start',
        fontSize: 22,
        color: '#696969',
        fontWeight: '600'
    },
    sectionButton: {
        alignSelf: 'flex-end',
        fontSize: 20,
        color: '#696969',
        fontWeight: '400',
    },
    sectionChild: {
        fontSize: 16,
        left: -3
    }

})