
import React from 'react';
import { TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles'

export default Pictures = ({ posts, navigation }) => {

    function renderPicture(post) {
        return (
            <TouchableOpacity>
                <Image source={{ uri: post.image }} style={styles.postImageX} />
            </TouchableOpacity>
        );
    }
    return (

        <>
            <FlatList
                horizontal
                style={styles.feed}
                data={posts}
                renderItem={({ item }) => renderPicture(item)}
                keyExtractor={item => item.key}
                showsHorizontalScrollIndicator={false} />
        </>

    )

}