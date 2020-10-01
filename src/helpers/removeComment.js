import React from 'react'
import firestore from '@react-native-firebase/firestore';

export default function removeComment({ ...data }) {

    const { poster_uid, post_key, comment_key } = data;

    let isRemoved = false;

    firestore()
        .collection('users')
        .doc(poster_uid)
        .collection('posts')
        .doc(post_key)
        .collection('comments')
        .doc(comment_key)
        .delete()
        .then(isRemoved = true)

    return isRemoved;
}
