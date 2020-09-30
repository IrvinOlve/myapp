import React from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function currentUser() {
    const loggedUserUid = auth().currentUser.uid;
    return loggedUserUid != null ? loggedUserUid : null
}