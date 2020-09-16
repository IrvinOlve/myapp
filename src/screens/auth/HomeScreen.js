import * as React from 'react';
// import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import NewsFeedScreen from '../../components/NewsFeedScreen';
import NewScreen from './newScreen';
import AddSceen from './AddScreen';
import handleProfile from '../../components/handleProfile';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const AddStack = createStackNavigator();

function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="NewsFeedScreen"
        component={NewsFeedScreen}
        options={{
          headerTitle: 'News Feed',
          headerLeft: false,
          headerShown: false,
        }}

      />
    </HomeStack.Navigator>
  );
}

function Add({ navigation }) {
  return (
    <AddStack.Navigator>
      <AddStack.Screen
        name="Add"
        component={AddSceen}
        options={{
          headerTitle: 'Add Post',
          headerLeft: false,
          headerShown: false,
        }}

      />
    </AddStack.Navigator>
  );
}

function Profile({ navigation }) {

  const [userName, setUserName] = React.useState()
  handleProfile().then(data => setUserName(data.name));


  function ProfileHeaderTitle() {
    return (
      <View>
        <Text style={{ fontSize: 17, }}>
          {userName + ' '}
          <Ionicons name={'checkmark-circle'}
            size={16}
            color={'#00acee'} />
        </Text>
      </View>
    );
  }

  function ProfileHeaderRight() {
    return (
      <Ionicons name={'ellipsis-horizontal'}
        style={{ marginRight: 20 }}
        size={25}
        color={'grey'}
        onPress={() => navigation.navigate('SettingsScreen')} />
    );
  }
  return (
    <SettingsStack.Navigator initialRouteName={ProfileScreen}>
      <SettingsStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: () => ProfileHeaderTitle(),
          headerRight: () => ProfileHeaderRight(),
          headerLeft: false,
          headerStyle: {
            shadowOpacity: 0,
            backgroundColor: '#FAFAFA',
          }
        }}
      />
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Edit profile',
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Button color='red' title='Log out' onPress={() => logout({ navigation })} />
            </View>
          ),
          headerBackTitle: 'Cancel',
        }}
      />
    </SettingsStack.Navigator>

  );
}

function logout({ navigation }) {
  auth()
    .signOut()
    .then(() => navigation.navigate('LoginScreen'))
}

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName={Profile}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },



      })}
      tabBarOptions={{

        showLabel: false,
        activeTintColor: '#0095ff',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}