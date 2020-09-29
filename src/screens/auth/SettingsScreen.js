import 'react-native-gesture-handler';

import styles from '../../styles/styles';

import React, { useEffect, useState } from 'react';

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
    TouchableOpacity,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import handleProfile from '../../helpers/handleProfile';

export default SettingsScreen = ({ navigation }) => {
    const user = auth().currentUser;

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [bio, setBio] = useState();

    function handleProfileChange(name, username, bio, { navigation }) {

        if (!name) {
            alert("Name can't be empty!")
        } else if (!username) {
            alert("Username can't be empty!")
        } else {
            handleProfile(name, username, bio)
            navigation.goBack()
            alert('Profile updated!');
        }
    }

    useEffect(() => {
        handleProfile()
            .then(props => {
                setName(props.name);
                setUsername(props.username);
                setBio(props.bio);
            })

    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={{
                backgroundColor: "white"
            }} contentInsetAdjustmentBehavior="automatic">
                <View style={style.editProfileContainer}>
                    <View style={[
                        style.changeImageContainer, {
                            borderTopColor: 'lightgrey',
                            borderTopWidth: StyleSheet.hairlineWidth
                        }]}>
                        <Image
                            style={style.avatar}
                            source={{ uri: user.photoURL }} />
                    </View>

                    {/* Name input */}
                    <View style={[
                        style.editProfileForm, {
                            borderTopColor: 'lightgrey',
                            borderTopWidth: StyleSheet.hairlineWidth
                        }]}>
                        <Text style={style.formlabel}>Name</Text>
                        <TextInput
                            onChangeText={setName}
                            style={style.input}
                            defaultValue={name}
                            placeholder='Name' />
                    </View>

                    {/* Username input */}
                    <View style={style.editProfileForm}>
                        <Text style={style.formlabel}>Username</Text>
                        <TextInput
                            onChangeText={setUsername}
                            style={style.input}
                            defaultValue={username}
                            placeholder='Username' />
                    </View>

                    {/* Bio input */}
                    <View style={[
                        style.editProfileForm, {
                            borderBottomColor: 'lightgrey',
                            borderBottomWidth: StyleSheet.hairlineWidth
                        }]}>
                        <Text style={style.formlabel}>Bio</Text>

                        <TextInput
                            onChangeText={setBio}
                            style={[
                                style.input, {
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 0
                                }]}
                            defaultValue={bio}
                            placeholder='Bio' />
                    </View>
                    <Button
                        style={{ paddingTop: 300, }}
                        onPress={(u) => {
                            handleProfileChange(
                                name,
                                username,
                                bio, { navigation });
                        }

                        }
                        title="Save" />
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    formlabel: {
        paddingHorizontal: 20,
        paddingTop: 15,
        width: 120,
    },
    editProfileContainer: {
        backgroundColor: 'white',
    },
    editProfileForm: {
        marginTop: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingBottom: 0,
    },
    input: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 15,
        width: '65%'
    },
    changeImageContainer: {
        alignItems: 'center',
    },
    avatar: {
        marginVertical: 40,
        width: 100,
        height: 100,
        borderRadius: 50,

    }
})