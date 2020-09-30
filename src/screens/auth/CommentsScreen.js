import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, StyleSheet, Image } from 'react-native'

import firestore from '@react-native-firebase/firestore';
import Loading from '../../components/Loading'
import CommentInput from '../../components/NewsFeed/CommentInput'
import getProfile from '../../helpers/getProfile';

const CommentsScreen = ({ route }) => {

    const { key, uid } = route.params;

    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [noComments, setNoComments] = useState(true);

    useEffect(() => {
        const subscriber = firestore()
            .collection('users')
            .doc(uid)
            .collection('posts')
            .doc(key)
            .collection('comments')
            .onSnapshot(querySnapshot => {
                const comments = [];
                querySnapshot.forEach(comment => {
                    comments.push({
                        ...comment.data(),
                        key: comment.id,
                    });
                });

                setLoading(false);
                setComments(comments);
            });
        return () => subscriber();
    }, []);


    function Comment({ data }) {

        const [loading, setLoading] = useState(true);
        const { comment, uid } = data
        const [commenter, setCommenter] = useState();


        useEffect(() => {
            getProfile(uid)
                .then(data => {
                    setCommenter(data)
                    setLoading(false)
                })
        }, [])


        return (
            <>
                <View>
                    {loading ?
                        <Loading />
                        :
                        <View style={styles.commentContainer}>
                            {/* <View style={styles.avatar}> */}
                            <Image style={styles.avatar} source={{ uri: commenter.avatar }} />
                            {/* </View> */}
                            <View style={styles.textContainer}>
                                <Text style={{ fontSize: 16, }}>
                                    {comment}
                                </Text>
                            </View>
                        </View>}
                </View>
            </>
        )
    }
    return (
        <>
            {loading ?
                <Loading />
                :

                <FlatList
                    style={styles.comments}
                    data={comments}
                    renderItem={({ item }) => <Comment data={item} />}
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
