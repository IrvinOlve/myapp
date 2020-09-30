import React from 'react';
import { View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import NewsFeedScreen from './NewsFeedScreen';
import AddScreen from './AddScreen';

import NewsFeedStack from '../../navigation/NewsFeedStack';
import ProfileStack from '../../navigation/ProfileStack';
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const AddStack = createStackNavigator();



// function NewsFeedStack() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="NewsFeedScreen"
//         component={NewsFeedScreen}
//         options={{
//           headerTitle: 'News Feed',
//           headerLeft: false,
//           headerShown: false,
//         }}

//       />
//     </HomeStack.Navigator>
//   );
// }

function Add({ navigation }) {
  return (
    <AddStack.Navigator>
      <AddStack.Screen
        name="Add"
        component={AddScreen}
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
  return (
    <>
      <SettingsStack.Navigator initialRouteName={ProfileScreen}>
        <SettingsStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          initialParams={{ uid: currentUser }}
          options={{
            // backgroundColor: '#EBECF4',
            headerShown: false,
            headerTitle: () => ProfileHeaderTitle(),
            headerRight: () => ProfileHeaderRight(),
            headerLeft: false,
            headerStyle: {
              shadowOpacity: 0,
              backgroundColor: '#FAFAFA',
            }
          }}
        />
        <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen}
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
    </>
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
            iconName = focused ? 'home' : 'home-outline';
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
      <Tab.Screen name="Home" component={NewsFeedStack} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}