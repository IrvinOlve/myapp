import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { StatusBar } from 'react-native';

import Profile from '../../components/Profile';
import Loading from '../../components/Loading';
import getProfile from '../../helpers/getProfile';

export default ProfileScreen = ({ navigation, route }) => {

  const { uid, fromPost } = route.params;

  const [userData, setUserData] = useState({})
  const [profileLoaded, setProfileLoaded] = useState(false);

  // Get user data.
  useEffect(() => {
    getProfile(uid)
      .then(data => {
        setUserData(data)
        setProfileLoaded(true)
      });
  }, [])

  const defaultUser = {
    avatar: '',
    name: 'Irvin Olvera',
    username: 'irv.inog',
    bio: 'I love programming 👨🏻‍💻',
    location: 'London, UK',
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      {profileLoaded ?
        <Profile navigation={navigation} data={userData} fromPost={fromPost} />
        :
        <Loading />
      }
    </>
  );
}