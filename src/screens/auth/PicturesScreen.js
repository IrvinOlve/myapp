
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';


export default PicturesScreen = ({ route }) => {

    const { posts } = route.params;

    function renderPicture(post) {
        return (
            <TouchableOpacity>
                <Image source={{ uri: post.image }} style={styles.postImageX} />
            </TouchableOpacity>
        );
    }
    return (
        <FlatList
            horizontal
            numColums='3'
            numRows='2'
            // scrollEnabled={false}
            style={styles.feed}
            data={posts}
            renderItem={({ item }) => renderPicture(item)}
            keyExtractor={item => item.key}
            showsHorizontalScrollIndicator={false} />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        top: 10
    },
    location: {
        top: -1,
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 17,
        color: '#696969',
    },
    postImageX: {
        width: 138,
        height: 138,
    },

})