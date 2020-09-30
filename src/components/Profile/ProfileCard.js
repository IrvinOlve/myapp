import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Avatar from './Avatar';
import ActionButtons from './ActionButtons';
import Location from './Location';

export default function ProfileCard({ avatar, location, name, navigation }) {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Avatar image={avatar} />
                <View style={{ left: 27, top: 20 }}>
                    <Text style={styles.userName}>{name}</Text>
                    <Location data={location} />
                </View>
            </View>
            <ActionButtons navigation={navigation} />

        </View>
    )
}

const styles = StyleSheet.create({

    userName: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 30,
        color: '#696969',
        // paddingTop: 17,
    },
})