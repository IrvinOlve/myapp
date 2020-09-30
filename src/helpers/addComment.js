import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import firestore from '@react-native-firebase/firestore';
import Firebase from '@react-native-firebase/storage';

export default function addComment({ ...postId }) {

    const { post_Id, posterUid, comment, currentUser } = postId;

    let isUploaded = false;

    console.log(postId);

    const dataRef = firestore()
        .collection('users')
        .doc(posterUid)
        .collection('posts')
        .doc(post_Id)
        .collection('comments')

    dataRef.add({
        comment: comment,
        uid: currentUser,
        time: Date.now(),
    }).then(() => {
        console.log('Comment added')
        isUploaded = true;
    }

    )
    return isUploaded;
}
