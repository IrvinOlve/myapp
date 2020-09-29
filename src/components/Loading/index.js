import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default Loading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})