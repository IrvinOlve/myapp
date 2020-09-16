import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

// App screens.
import HomeScreen from './LoginScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

// App styles
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';

// App settings
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import auth from '@react-native-firebase/auth';
import OtherScreen from './OtherScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export default TabNav = ({navigation, route}) => {
  function Home() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={OtherScreen}
          options={{title: 'Home'}}
        />
      </HomeStack.Navigator>
    );
  }

  function Profile() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{titles: 'My profile'}}
        />
      </ProfileStack.Navigator>
    );
  }

  function Settings() {
    return (
      <SettingsStack.Navigator>
        <SettingsScreen.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title: 'Settings'}}
        />
      </SettingsStack.Navigator>
    );
  }

  const LoggedIn = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
      return (
        <View>
          <Text>Not user logged in. </Text>
          <Text onPress={() => navigation.navigate('HomeScreen')}>Go back</Text>
        </View>
      );
    }

    return (
      <View style={styles.loginForm}>
        <Text>Hello, {user.email} !</Text>
        <Button title="Log out" onPress={() => logout({navigation})}></Button>
      </View>
    );
  };

  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home-outline' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-outline' : 'settings-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-outline' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'lightblue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </>
  );
};
