
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';


export default ProfileButtons = ({ image }) => {

    const [imageLoaded, setImageLoaded] = useState(true);

    const onError = 'https://firebasestorage.googleapis.com/v0/b/myapp-4f869.appspot.com/o/defaultAvatar%2Fdefault-user-image.png?alt=media&token=6dc48713-15bd-4341-8504-e27f59174177';


    return (
        <View style={styles.profileAvatarShadow}>
            <Image
                source={{ uri: imageLoaded ? image : onError }}
                style={styles.profileAvatar}
                onError={() => setImageLoaded(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    profileAvatar: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderColor: 'white',
    },
    profileAvatarShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
})