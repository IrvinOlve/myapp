import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

// Helpers
import addComment from '../../helpers/addComment';
import currentUser from '../../helpers/currentUser'

import styles from './styles'

const CommmentInput = ({ postId }) => {

    // Post identifiers.
    const { key, uid } = postId;

    const [comment, setComment] = useState('');

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={'Type your comment here...'}
                    onChangeText={setComment}
                    value={comment}
                />
                <Text>
                    <TouchableOpacity
                        onPress={() => {
                            setComment('');
                            addComment({
                                post_Id: key,
                                posterUid: uid,
                                comment: comment,
                                currentUser: currentUser(),
                            });
                        }}>
                        <Ionicons name="arrow-redo-circle" size={50} color="#6bb9f0" />
                    </TouchableOpacity>
                </Text>
            </View>
        </>
    )
}
export default CommmentInput
