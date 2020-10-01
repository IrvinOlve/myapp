import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActionSheetIOS, Alert } from 'react-native'
import removeComment from '../../helpers/removeComment'
import firestore from '@react-native-firebase/firestore';

export default function CommentBubble({ data }) {

    // Original commenter uid, to fetch their profile photo.
    const { comment, uid } = data

    // Post and comment identifiers. 
    const { poster_uid, post_key, comment_key } = data;

    const [commenter, setCommenter] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProfile(uid)
            .then(data => {
                setCommenter(data)
                setLoading(false)
            })
    }, [])

    const userOptions = () => {

        const createTwoButtonAlert = () =>
            Alert.alert(
                "Delete comment",
                "Are you sure?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "Yes", onPress: () => {
                            removeComment({
                                poster_uid: poster_uid,
                                post_key: post_key,
                                comment_key: comment_key,
                            })
                        }
                    }
                ],
                { cancelable: false }
            );

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Delete"],
                destructiveButtonIndex: [1],
                cancelButtonIndex: 0
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    // cancel action
                } else if (buttonIndex === 1) {
                    createTwoButtonAlert()
                }
            }
        );
    }

    return (
        <>
            <View>
                {loading ?
                    <Loading />
                    :
                    <View style={styles.commentContainer}>
                        <Image style={styles.avatar} source={{ uri: commenter.avatar }} />
                        <TouchableOpacity style={styles.textContainer} onPress={() => { userOptions() }}>
                            <Text style={{ fontSize: 16, }}> {comment} </Text>
                        </TouchableOpacity>
                    </View>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    comments: {
        paddingTop: 20,
    },
    commentContainer: {
        flexDirection: 'row',
    },
    textContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 100,
    },
    avatar: {
        marginLeft: 15,
        marginTop: 5,
        height: 40,
        width: 40,
        borderRadius: 50,
    }
})