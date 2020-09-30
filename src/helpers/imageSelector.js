import 'react-native-gesture-handler';

import React from 'react';
import ImagePicker from 'react-native-image-picker';


export default imageSelector = async () => {

    const options = {
        noData: true,
        allowsEditing: true,
        quality: 1,
    }

    // Function to pick image from device.
    return await new Promise(async (resolve, rejection) => {
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

};
