import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/auth/ProfileScreen';
import NewsFeedScreen from '../screens/auth/NewsFeedScreen';
import CommentsScreen from '../screens/auth/CommentsScreen'
const Stack = createStackNavigator();

export default function NewsFeedStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsFeedScreen"
                component={NewsFeedScreen}
                options={{
                    headerTitle: 'News Feed',
                    headerLeft: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="CommentsScreen"
                component={CommentsScreen}
                options={{
                    headerTitle: 'Comments',
                    headerBackTitle: ' ',
                }}
            />




        </Stack.Navigator>
    );
}