import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, StyleSheet, Image } from 'react-native'

import firestore from '@react-native-firebase/firestore';
import Loading from '../../components/Loading'
import CommentInput from '../../components/NewsFeed/CommentInput'
import getProfile from '../../helpers/getProfile';
import CommentBubble from '../../components/NewsFeed/CommentBubble';

const CommentsScreen = ({ route }) => {

    // Post idenftiers.
    const { key, uid } = route.params;

    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    const postRef = firestore()
        .collection('users')
        .doc(uid)
        .collection('posts')
        .doc(key)
        .collection('comments')

    useEffect(() => {
        const subscriber = postRef
            .onSnapshot(querySnapshot => {
                const comments = [];
                querySnapshot.forEach(comment => {
                    comments.push({
                        ...comment.data(),
                        key: comment.id,
                    })
                });
                setComments(comments);
                setLoading(false);
            });
        return () => subscriber();
    }, []);

    return (
        <>
            {loading ?
                <Loading />
                :
                <FlatList
                    style={styles.comments}
                    data={comments}
                    renderItem={({ item }) =>
                        <CommentBubble
                            data={{
                                ...item,
                                poster_uid: uid,
                                post_key: key,
                                comment_key: item.key,
                            }}
                        />}
                    keyExtractor={item => item.key}
                    showsVerticalScrollIndicator={false}
                />
            }
            <CommentInput postId={route.params} />
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

export default CommentsScreen
