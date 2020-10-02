import 'react-native-gesture-handler';
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
  ImageBackground,
  StyleSheet,
  Pressable,
  TouchableOpacity,

} from 'react-native';

import auth from '@react-native-firebase/auth';

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

export default LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('irvin@gmail.com');
  const [password, setPassword] = useState('Irvin0798');

  const image = { uri: "https://i.stack.imgur.com/JHYTI.jpg" };
  return (

    <ImageBackground source={image} style={styless.image}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.loginForm}>
        {/* <Text>{auth().currentUser.email}</Text> */}

        <TextInput
          style={styles.loginInputText}
          name="username"
          value={username}
          placeholder="Username"
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.loginInputText}
          name="password"
          value={password}
          secureTextEntry
          placeholder="Password"
          onChangeText={setPassword} />

        <StyleButton
          text="Log in"
          onPress={(u) => login(username, password, { navigation })} />

        <Text style={styless.createAccount}>
          Don't have an account?
          <TouchableOpacity>
            <Text style={styless.createAccountLink}
              onPress={(u) => {
                navigation.navigate('RegisterScreen')
                console.log('pressed')
              }}> Create one
            </Text>
          </TouchableOpacity>

        </Text>
        {/* <Button
            title='Create an account'
            onPress={(u) => navigation.navigate('RegisterScreen')} /> */}

      </View>

    </ImageBackground>

  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  createAccount: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
  },
  createAccountLink: {
    fontWeight: "bold",
    color: '#fff',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});
