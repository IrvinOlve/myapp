import 'react-native-gesture-handler';

import * as React from 'react';

import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';
import uuid4 from 'uuid/v4';
import auth from '@react-native-firebase/auth';
import * as Progress from 'react-native-progress';

export default uploadToDDB = async (uri) => {

    const imageURL = await new Promise(async (resolve, rejection) => {

        const currentUser = auth().currentUser;

        // Create path to image.
        const pathToFile = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

        // Create referece to image.
        const uuid = uuid4();
        const fileExtension = uri.split('.').pop();
        const fileName = uuid + '.' + fileExtension;
        const reference = storage().ref(`users/${currentUser.uid}/images/${fileName}`);

        // Upload image to server and get 'getDownloadURL'.
        const uploadDoc = reference.putFile(pathToFile)

        uploadDoc.on('state_changed', snapshot => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Progress: ' + progress)

            // console.log(snapshot.totalBytesTransferred);
        }, function () {
            // Handle unsuccessful uploads
        }, async function () {
            const url = await reference.getDownloadURL();
            resolve(url);
        })

        // Set uploaded image as 'photoURL'.

        // Return resolved promise.

    })

    return imageURL;

};
