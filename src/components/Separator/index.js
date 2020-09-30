import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

export default function Separator({ top, bottom, left, right }) {
    return (

        <View style={{
            borderBottomColor: 'lightgrey',
            borderBottomWidth: StyleSheet.hairlineWidth,
            width: '100%',
            marginTop: !top ? 0 : top,
            marginBottom: !bottom ? 0 : bottom,
            marginLeft: !left ? 0 : left,
            marginRight: !right ? 0 : right,
        }}></View>
    );
}