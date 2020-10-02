import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native'
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/Ionicons';

import commentOptions from '../../helpers/commentOptions'
import styles from './styles'

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

