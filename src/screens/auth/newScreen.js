import 'react-native-gesture-handler';

import styles from '../../styles/styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React, { useEffect, useState, useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsFeedScreen from '../../components/NewsFeedScreen';
import StyleButton from '../../components/Button';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Image,
    StyleSheet,
    Pressable,
    Animated,
    Dimensions,
} from 'react-native';

import auth from '@react-native-firebase/auth';

import { useIsFocused } from '@react-navigation/native';

export default ProfileScreen = ({ navigation }) => {

    function UserStats() {

        return (
            <View style={style.statsContainer}>
                <View>
                    <Text style={style.statsNumbers}>
                        1
      </Text>
                    <Text style={style.statsTexts}>
                        Following
      </Text>
                </View>
                <View style={style.statsMiddleBox}>
                    <Text style={style.statsNumbers}>
                        3.5M
      </Text>
                    <Text style={style.statsTexts}>
                        Followers
      </Text>
                </View>

                <View >
                    <Text style={style.statsNumbers}>
                        0
      </Text>
                    <Text style={style.statsTexts}>
                        Posts
      </Text>
                </View>
            </View>

        );


    }

    function HomeScreen() {
        return (
            <View>
                <Text>Screen 1</Text>
            </View>

        );
    }

    function SettingsScreen() {
        return (
            <View>
                <Text>Screen 2</Text>
            </View>
        );
    }
    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            <View style={styles.homeContainer}>

                <Pressable onPress={() => { alert('You clicked your profile picture!') }}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: 'https://i.imgur.com/kqbhS6f.jpg' }} />
                </Pressable>
                <UserStats />
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={NewsFeedScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </>
    );
}

const style = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    statsContainer: {
        textAlign: 'center',
        flexDirection: 'row',
        paddingTop: 20,

    },
    statsNumbers: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 17,

    },
    statsTexts: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '200',
    },
    statsMiddleBox: {
        borderLeftColor: 'lightgrey',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightColor: 'lightgrey',
        borderRightWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        textAlign: 'center',
    }
})