import 'react-native-gesture-handler';


import React, { useEffect, useState, useRef } from 'react';
import uploadToDB from './uploadToDB';
import Firebase from '@react-native-firebase/storage';

import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';

export async function addpost(imageUri, text, user) {

    const image = await uploadToDB(imageUri);
    const postRef = firestore().collection('users').doc(user.uid).collection('posts');
    // const userRef = firestore().collection('users').doc(user.uid);
    const data = await postRef.get();
    const userdata = data.data();

    console.log(userdata.name);

    let isUploaded = false;

    // const snapshot = await postRef.get();

    // snapshot.forEach(doc => {
    //     console.log(doc.id, '=>', doc.data());
    // });  

    postRef.add({
        time: Date.now(),
        image: image,
        text: text,
        uid: user.uid,
        name: userdata.name,

    }).then(() => {
        console.log('Post uploaded...')
        alert('Post uploaded!')
        isUploaded = true;
    })
    return isUploaded;
}

