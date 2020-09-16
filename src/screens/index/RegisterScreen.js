import 'react-native-gesture-handler';

import HomeScreen from '../auth/HomeScreen';

import styles from '../../styles/styles';

import React, { useState, useEffect } from 'react';
import StyleButton from '../../components/Button';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground,
    FlatList,
} from 'react-native';

import auth from '@react-native-firebase/auth';

export default RegisterScreen = ({ navigation }) => {
    function register(username, password, { navigation }) {
        auth()
            .createUserWithEmailAndPassword(username, password)
            .then(() => login(username, password, { navigation }))
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                alert(error);
            });
    }

    function login(username, password, { navigation }) {
        auth()
            .signInWithEmailAndPassword(username, password)
            .then(() => navigation.navigate('HomeScreen'))
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    const [username, setUsername] = useState('irvin@gmail.com');
    const [password, setPassword] = useState('Irvin0798');

    const image = { uri: "https://i.stack.imgur.com/JHYTI.jpg" };
    return (
        <>
            <ImageBackground source={image} style={styless.image}>

                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View style={styles.loginFormRegister}>
                        <TextInput
                            style={styles.loginInputText}
                            name="username"
                            value={username}
                            placeholder="Username"
                            onChangeText={(value) => setUsername(value)}></TextInput>

                        <TextInput
                            style={styles.loginInputText}
                            name="password"
                            value={password}
                            // secureTextEntry
                            placeholder="Password"
                            onChangeText={(value) => setPassword(value)}></TextInput>

                        <StyleButton
                            text="Create account"
                            onPress={(u) => register(username, password, { navigation })} />
                        <Text style={styless.createAccount}>
                            Already have an account?
                        <Text style={styless.createAccountLink}
                                onPress={(u) => { navigation.goBack() }}> Log in
                            </Text>
                        </Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    );
};



const styless = StyleSheet.create({

    createAccount: {
        textAlign: 'center',
        paddingVertical: 10,
        color: '#fff',
    },
    createAccountLink: {
        fontWeight: "bold",
        color: '#fff',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})