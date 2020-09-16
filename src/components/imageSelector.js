import 'react-native-gesture-handler';

import * as React from 'react';

import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';
import uuid4 from 'uuid/v4';
import auth from '@react-native-firebase/auth';
import * as Progress from 'react-native-progress';

export default imageSelector = async () => {

    const options = {
        // noData: true,
        // allowsEditing: true,
        // aspect: [4, 3],
        // quality: 1,
    }

    // Function to pick image from device.
    const selectImage = await new Promise(async (resolve, rejection) => {
        ImagePicker.showImagePicker(options, selectedImage => {
            const { didCancel, error } = selectedImage;
            if (didCancel) {
                console.log('Post canceled');
            } else if (error) {
                alert('An error occurred: ', error);
            } else {
                resolve(selectedImage.uri)
            }
        })
    });

    return selectImage;
};
