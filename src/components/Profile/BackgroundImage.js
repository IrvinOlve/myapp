import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TouchableOpacity, ActionSheetIOS } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';
export default BackgroundImage = ({ data, visible }) => {

    const { cover } = data;

    function blurRadius() {
        if (visible) {
            return 0
        }
        return 10
    }

    return (
        <ImageBackground blurRadius={blurRadius()} source={{ uri: cover }} style={styles.dimentions}>
            <LinearGradient locations={[0, 1]} colors={['rgba(0,0,0,0)', 'rgba(0, 0, 0, 0.5)']} style={styles.dimentions} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    dimentions: {
        position: 'absolute',
        width: '100%',
        height: 550,
        flex: 1,
    }
})