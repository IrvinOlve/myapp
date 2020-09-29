import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, VirtualizedList, SectionList, ActivityIndicator, RefreshControl, Animated } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from "moment";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import firestore from '@react-native-firebase/firestore';
import Firebase from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

// temporary data until we pull from Firebase

function renderPost(post) {


    return (

        <Image source={{ uri: post.image }} style={styles.postImage} resizeMode="cover" />

    );
}

export default function NewsFeedScreen() {
    const [currentData, setCurrentData] = useState();
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    const user = auth().currentUser;

    useEffect(() => {

        const subscriber = firestore()
            .collection('users').doc(user.uid).collection('posts')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setUsers(users);
                setLoading(false)
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    const HEADER_EXPANDED_HEIGHT = 300
    const HEADER_COLLAPSED_HEIGHT = 60
    let scrollY = new Animated.Value(0)
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    })
    return (
        <Animated.View
            onScroll={Animated.event(
                [{
                    nativeEvent: {
                        contentOffset: {
                            y: scrollY
                        }
                    }
                }], { useNativeDriver: false })}
            scrollEventThrottle={16}
            style={[styles.container, { height: headerHeight }]}>

            {loading ? (
                < ActivityIndicator />
            )
                : (

                    <FlatList
                        numColumns='3'
                        style={styles.feed}
                        data={users}
                        renderItem={({ item }) => renderPost(item)}
                        keyExtractor={item => item.key}
                        showsVerticalScrollIndicator={false} />


                )
            }
        </Animated.View>

    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        top: 30,
        flex: 1,
    },
    feed: {
        marginHorizontal: 10,
    },
    postImage: {
        marginHorizontal: 7,
        width: 115,
        height: 115,
        borderRadius: 10,
        marginVertical: 5,
    }
});
