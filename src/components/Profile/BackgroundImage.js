import React from 'react';
import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

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
