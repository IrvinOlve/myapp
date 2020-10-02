import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

import Avatar from './Avatar';
import ActionButtons from './ActionButtons';
import Location from './Location';

export default function ProfileCard(props) {

    const { avatar, location, name, navigation } = props;

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
