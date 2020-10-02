
import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

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