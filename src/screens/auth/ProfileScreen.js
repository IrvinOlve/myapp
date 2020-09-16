import 'react-native-gesture-handler';

import styles from '../../styles/styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React, { useEffect, useState, useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsFeedScreen from '../../components/NewsFeedScreen';
import SettingsScreen from './SettingsScreen';
import imageSelector from '../../components/imageSelector';
import handleProfile from '../../components/handleProfile';
import StyleButton from '../../components/Button';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import uploadToDDB from '../../components/uploadToDB';


import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  StyleSheet,
  Pressable,
  Vibration,

} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default ProfileScreen = ({ navigation }, image) => {

  const user = auth().currentUser;
  const [displayPhoto, setDisplayPhoto] = useState(user.photoURL);

  const ProfilePhoto = () => {

    const [imageLoaded, setImageLoaded] = useState(true);

    function handleImage(url) {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
      setDisplayPhoto(url);
    }

    function updateProfilePhoto(url) {
      uploadToDDB(uri).then(url => setDisplayPhoto(url))

      user.updateProfile({
        photoURL: url,
      });
    }

    const onError = 'https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';

    return (
      <Pressable onPress={() => imageSelector().then(uri => updateProfilePhoto(uri))}>
        <Image
          style={styles.profileAvatar}
          onError={() => setImageLoaded(false)}
          source={{ uri: imageLoaded ? displayPhoto : onError }} />
        <Ionicons name={'add-circle-sharp'}
          size={25}
          color={'#00acee'}
          style={styles.avatarAdd} />
      </Pressable >
    );
  }

  function UserStats() {

    return (
      <View style={styles.statsContainer}>
        <View>
          <Text style={styles.statsNumbers}>
            1
      </Text>
          <Text style={styles.statsTexts}>
            Following
      </Text>
        </View>
        <View style={styles.statsMiddleBox}>
          <Text style={styles.statsNumbers}>
            3.5M
      </Text>
          <Text style={styles.statsTexts}>
            Followers
      </Text>
        </View>

        <View >
          <Text style={styles.statsNumbers}>
            0
      </Text>
          <Text style={styles.statsTexts}>
            Posts
      </Text>
        </View>
      </View>

    );
  }

  function MessagesScreen() {
    return (
      <SafeAreaView style={{ alignItems: 'center', }}>
        <Text>Your meesages are here!</Text>
      </SafeAreaView>
    );
  }


  var [xy, setXY] = useState();


  useEffect(() => {
    handleProfile()
      .then(u => setXY(u.bio))
  });

  return (
    <>
      <View style={styles.homeContainer}>
        <ProfilePhoto />
        <UserStats />
        <View style={{ position: 'relative', left: 115, width: 240 }}>
          <StyleButton outline text='Edit profile' onPress={() => { navigation.navigate('SettingsScreen') }} />
        </View>
        <Text>{xy}</Text>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'apps-sharp'
                : 'apps-sharp';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={23} color={color} />;
          },

        })}
        tabBarOptions={{
          showIcon: true,
          flex: 1,
          showLabel: false,
          activeTintColor: '#0095ff',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#FAFAFA',
          }
        }} >
        <Tab.Screen name="Home" component={NewsFeedScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
      </Tab.Navigator >
    </>
  );
}