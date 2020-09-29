import React, { useState, useEffect } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import moment from "moment";
import getProfile from '../../helpers/getProfile'
import PostLoader from './PostLoader';

export default PostCard = ({ navigation, post }) => {

    const { uid, time, text, image } = post;

    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProfile(uid)
            .then(data => {
                setUserData(data)
                setLoading(false)
            })
    }, []);

    return (
        <>
            <View style={styles.feedItem}>
                {loading ?
                    <PostLoader />
                    :
                    <>
                        <Image source={{ uri: userData.avatar }} style={styles.avatar} />
                        <View style={{ flex: 1, marginRight: 16 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', { uid: userData.uid, fromPost: true })} >
                                        <Text style={styles.name}>{userData.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.timestamp}>{moment(time).fromNow()}</Text>
                                </View>

                                <Ionicons name="add-outline" size={24} color="#73788B" />
                            </View>
                            <Text style={styles.post}>{text}</Text>
                            <Image source={{ uri: image }} style={styles.postImage} resizeMode="cover" />
                            <View style={{ flexDirection: "row" }}>
                                <Ionicons name="heart-outline" size={24} color="#73788B" style={{ marginRight: 16 }} />
                                <Ionicons name="chatbox-outline" size={24} color="#73788B" />
                            </View>
                        </View>
                    </>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 55,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        // shadowColor: "#454D65",
        // shadowOffset: { height: 5 },
        // shadowRadius: 15,
        // shadowOpacity: 0.2,
        // zIndex: 10
    },
    headerTitle: {
        top: 4.5,
        fontSize: 17,
        fontWeight: '600',
    },
    feed: {
        marginHorizontal: 20,
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8,
        height: 290,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16,
        // borderWidth: 1,
        borderColor: 'black'
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
})