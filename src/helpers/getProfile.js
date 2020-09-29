
import React from 'react';
import firestore from '@react-native-firebase/firestore';

export default getProfile = async (uid) => {
    const userRef = firestore().collection('users').doc(uid);
    const user = await userRef.get()
    return user.data()
};
