import React from 'react';
import { View, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ProfileScreen from '../screens/auth/ProfileScreen';
import SettingsScreen from '../screens/auth/SettingsScreen';
import PicturesScreen from '../screens/auth/PicturesScreen';
import ChatScreen from '../screens/auth/ChatScreen';

// Helpers
import currentUser from '../helpers/currentUser';


const Stack = createStackNavigator();

export default function Profile({ navigation }) {

    const currentUid = currentUser();

    return (
        <>
            <Stack.Navigator initialRouteName={ProfileScreen}>
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    initialParams={{ uid: currentUid, fromPost: false }}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
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

                <Stack.Screen
                    name="PicturesScreen"
                    component={PicturesScreen}
                    options={{
                        headerTitle: 'Pictures',
                        headerBackTitle: ' ',
                    }}
                />

                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={{
                        headerTitle: 'Chat',
                        headerBackTitle: ' ',
                    }}
                />
            </Stack.Navigator>
        </>
    );
}