
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles'

export default ActionButtons = ({ navigation }) => {
    return (
        <View style={{ top: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatScreen')} >
                <Ionicons name={'paper-plane-outline'} size={27} color={'#373737'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Ionicons name={'person-add-outline'} size={27} color={'#373737'} />
            </TouchableOpacity>
        </View>
    );
}
