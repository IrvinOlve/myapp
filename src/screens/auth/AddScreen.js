import 'react-native-gesture-handler';

import styles from '../../styles/styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React, { useEffect, useState, useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsFeedScreen from './NewsFeedScreen';
import StyleButton from '../../components/Button';
import imageSelector from '../../helpers/imageSelector';
import uploadPhoto from '../../helpers/uploadPhoto';
import { addpost } from '../../helpers/AppFunctions';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Image,
    StyleSheet,
    Pressable,
    Animated,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Firebase from '@react-native-firebase/storage';

import auth from '@react-native-firebase/auth';

import { useIsFocused } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
export default AddScreen = () => {

    const user = auth().currentUser;
    const [image, setImage] = useState();
    const [text, setText] = useState();
    const [isPressed, setIsPressed] = useState(false);

    function handleAddPost(image, text, user) {
        setIsPressed(true);
        addpost(image, text, user).then(uploadStatus => setIsPressed(uploadStatus))
    }
    return (
        <>
            <View style={style.header}>
                <Text style={style.headerTitle}>Add Post</Text>
                <View style={style.headerRightButton}>
                    {isPressed ?
                        (<ActivityIndicator style={{ right: 7 }} size='small' color='grey' />) :
                        (<Button title="Post" onPress={() => handleAddPost(image, text, user)} />)}

                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity
                    style={style.image}
                    onPress={() => imageSelector().then(uri => setImage(uri))}>

                    {image ? (<Image
                        style={{
                            height: 150,
                            width: '100%',
                            resizeMode: 'contain',
                        }}
                        source={{ uri: image }} />)
                        :
                        (<Ionicons name='camera' size={55} color='grey' />)}

                </TouchableOpacity>

                <View style={style.postForm}>

                    <Text>Tell the world why you love this picture! :D</Text>
                    <TextInput onChangeText={setText} style={style.input} placeholder='Type here...' />
                </View>
                {/* <Button title='Post' onPress={() => addpost(image, text, user)} /> */}
            </View>
        </>
    );
}

const style = StyleSheet.create({
    header: {
        // flex: 1,
        paddingTop: 55,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        // alignItems: "center",
        justifyContent: "center",
        // flexDirection: 'row',

        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        // shadowColor: "#454D65",
        // shadowOffset: { height: 5 },
        // shadowRadius: 15,
        // shadowOpacity: 0.2,
        // zIndex: 10
    },
    headerTitle: {
        alignSelf: 'center',
        top: 4.5,
        fontSize: 17,
        fontWeight: '600',
    },
    headerRightButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingTop: 48,
        paddingRight: 15,
        fontSize: 17,
        color: '#0a84ff',

    },
    headerLeftButton: {
        position: 'absolute',
        alignSelf: 'flex-start',
        paddingTop: 48,
        paddingLeft: 18,
        fontSize: 17,
        color: '#0a84ff',

    },
    image: {
        height: 150,
        display: 'flex',
        margin: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 10,
    },
    postForm: {
        paddingHorizontal: 60,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    statsContainer: {
        textAlign: 'center',
        flexDirection: 'row',
        paddingTop: 20,

    },
    statsNumbers: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 17,

    },
    statsTexts: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '200',
    },
    statsMiddleBox: {
        borderLeftColor: 'lightgrey',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightColor: 'lightgrey',
        borderRightWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        textAlign: 'center',
    }
})