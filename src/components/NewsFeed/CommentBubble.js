import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native'
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/Ionicons';

import commentOptions from '../../helpers/commentOptions'

export default function CommentBubble({ data }) {

    // Commenter's uid, to fetch their profile info.
    const { comment, time, uid } = data

    const [commentUser, setCommentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProfile(uid)
            .then(profile => {
                setCommentUser(profile)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <View>
                {loading ?
                    null
                    :
                    <View style={styles.container}>
                        <Image style={styles.avatar} source={{ uri: commentUser.avatar }} />
                        <View style={styles.commentContainer}>
                            <View style={styles.commentHeader}>
                                <View>
                                    <Text style={styles.username}> {commentUser.name} </Text>
                                    <Text style={styles.time}> {moment(time).fromNow()} </Text>
                                </View>
                                <TouchableOpacity style={styles.textContainer} onPress={() => { commentOptions({ data }) }}>
                                    <Ionicons name="ellipsis-vertical" size={24} color="#73788B" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.comment}>{comment}</Text>
                        </View>
                    </View>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    comments: {
        paddingTop: 20,
    },
    username: {
        fontWeight: '400',
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    time: {
        fontWeight: '700',
        fontSize: 10,
        color: 'lightgrey',
        paddingTop: 3
    },
    comment: {
        fontSize: 15,
        paddingTop: 10,
        left: 3,
        marginRight: 50
    },
    textContainer: {
        paddingTop: 5,
    },
    avatar: {
        // marginLeft: 15,
        marginTop: 5,
        height: 45,
        width: 45,
        borderRadius: 50,
    },
    commentContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 10,

        paddingVertical: 10,
        marginLeft: 15,
        marginBottom: 20,
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'white',

        // Shadow 
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.1,
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
})