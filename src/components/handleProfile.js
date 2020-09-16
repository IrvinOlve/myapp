import 'react-native-gesture-handler';


import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';
import uuid4 from 'uuid/v4';
import auth from '@react-native-firebase/auth';
import * as Progress from 'react-native-progress';
import React, { useEffect, useState, useRef } from 'react';
import firestore from '@react-native-firebase/firestore';



export default handleProfile = async (name, username, bio) => {

    function Hola() {
        return 'Hola';
    }
    const user = auth().currentUser;
    const dataRef = firestore().collection('users').doc(user.uid);
    var state = null;
    function handleChange(props) {
        state = props;
    }

    if (name === undefined && username === undefined) {
        // console.log('handleProfile(undefined) => Returning profile props...')

        // Store profile properties locally to return to function.
        const doc = await dataRef.get()
        const props = doc.data().profile;

        handleChange(props);
    } else {
        try {
            // console.log('handleProfile(!undefined) => Updating profile props...')
            // Update profile properties with new passed data.

            await dataRef
                .update({
                    profile: {
                        name: name,
                        username: username,
                        bio: bio,
                    }
                });
        }
        catch (e) {
            alert('Something went wrong, please try again.' + e)
        }
    }
    return state;

};
