import React from 'react';
import { View, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/auth/ProfileScreen';
import SettingsScreen from '../screens/auth/SettingsScreen';

import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const currentUser = auth().currentUser.uid

export default function Profile({ navigation }) {
    return (
        <>
            <Stack.Navigator initialRouteName={ProfileScreen}>
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    initialParams={{ uid: currentUser, fromPost: false }}
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
            </Stack.Navigator>
        </>
    );
}