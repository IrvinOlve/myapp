
import React, { useState, useEffect } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, StyleSheet, TouchableOpacity, ActionSheetIOS, Text, FlatList, Image } from 'react-native';


export default Pictures = ({ posts, navigation }) => {

    function renderPicture(post) {
        return (
            <TouchableOpacity>
                <Image source={{ uri: post.image }} style={styles.postImageX} />
            </TouchableOpacity>
        );
    }
    return (

        <>
            <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, }}>
                <Text style={{ alignSelf: 'flex-start', fontSize: 22, color: '#696969', fontWeight: '600' }}>
                    Photos
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('picturesContainerTab')}>
                    <Text style={{ alignSelf: 'flex-end', fontSize: 20, color: '#696969', fontWeight: '400' }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                style={styles.feed}
                data={posts}
                renderItem={({ item }) => renderPicture(item)}
                keyExtractor={item => item.key}
                showsHorizontalScrollIndicator={false} />
        </>

    )

}

const styles = StyleSheet.create({
    location: {
        // paddingLeft: 5,
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 14,
        color: '#696969',
    },
    headerRight: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingTop: 60,
        paddingRight: 22,
        fontSize: 17,
        zIndex: 1,
    },
    headerLeft: {
        position: 'absolute',
        alignSelf: 'flex-start',
        paddingTop: 60,
        paddingLeft: 22,
        fontSize: 17,
        zIndex: 1,
    },
    profileFunctions: {
        left: 30,
        top: 35,
        resizeMode: 'stretch',
    },
    dimentions: {
        position: 'absolute',
        width: '100%',
        height: 600,
    },
    userName: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 30,
        color: 'white'
    },
    location: {
        paddingLeft: 5,
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 14,
        color: 'white'
    },
    profileAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileInfo: {
        flexDirection: 'row',
        top: 45,
        left: 30,
    },
    feed: {
        flex: 1,
        marginHorizontal: 13.7,
        // top: 50,
    },
    postImageX: {
        marginHorizontal: 7,
        width: 115,
        height: 115,
        borderRadius: 10,
        marginVertical: 5,
    },

})