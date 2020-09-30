
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TouchableOpacity, ActionSheetIOS } from 'react-native';


export default Header = ({ user, navigation, fromPost }) => {

    const userOptions = () => {

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Report", "Block", "Share"],
                destructiveButtonIndex: [1, 2],
                cancelButtonIndex: 0
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    // cancel action
                } else if (buttonIndex === 1) {
                    alert('User reported');
                } else if (buttonIndex === 2) {
                    alert('User blocked');
                } else if (buttonIndex === 3) {
                    alert('User shared')
                }
            }
        );
    }

    function TheirProfile() {
        return (
            <>
                <View style={[styles.headerLeft, styles.iconShadow]}>
                    <Ionicons
                        name={'arrow-back-outline'}
                        size={25} color={'white'}
                        onPress={() => navigation.goBack()} />
                </View>

                <View style={[styles.headerRight, styles.iconShadow]}>
                    <Ionicons
                        name={'ellipsis-horizontal'}
                        size={25} color={'white'}
                        onPress={() => userOptions()} />
                </View>
            </>
        )
    }

    function MyProfile() {
        return (
            <View style={[styles.headerRight, styles.iconShadow]}>
                <Ionicons name={'settings-outline'} size={25} color={'white'} onPress={() => navigation.navigate('SettingsScreen')} />
            </View>
        );
    }


    function ProfileHeaderSwitcher() {
        if (user && fromPost) {
            return (
                <View style={[styles.headerLeft, styles.iconShadow]}>
                    <Ionicons
                        name={'arrow-back-outline'}
                        size={25} color={'white'}
                        onPress={() => navigation.goBack()} />
                </View>
            )
        } else if (user && !fromPost) {
            return (
                <View style={[styles.headerRight, styles.iconShadow]}>
                    <Ionicons name={'settings-outline'} size={25} color={'white'} onPress={() => navigation.navigate('SettingsScreen')} />
                </View>
            )
        } else if (!user) {
            return (
                <>
                    <View style={[styles.headerLeft, styles.iconShadow]}>
                        <Ionicons
                            name={'arrow-back-outline'}
                            size={25} color={'white'}
                            onPress={() => navigation.goBack()} />
                    </View>

                    <View style={[styles.headerRight, styles.iconShadow]}>
                        <Ionicons
                            name={'ellipsis-horizontal'}
                            size={25} color={'white'}
                            onPress={() => userOptions()} />
                    </View>
                </>
            );
        }
    }
    return (
        <ProfileHeaderSwitcher />
    );
}

const styles = StyleSheet.create({
    location: {
        // paddingLeft: 5,
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 14,
        color: '#696969',
    },
    headerRight: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingTop: 60,
        paddingRight: 22,
        fontSize: 17,
        zIndex: 1,
    },
    headerLeft: {
        position: 'absolute',
        alignSelf: 'flex-start',
        paddingTop: 60,
        paddingLeft: 22,
        fontSize: 17,
        zIndex: 1,
    },

    iconShadow: {
        // shadowColor: "#454D65",
        shadowOffset: { height: 3 },
        shadowRadius: 7,
        shadowOpacity: 0.5,
    },
    profileFunctions: {
        left: 30,
        top: 35,
        resizeMode: 'stretch',
    },
    dimentions: {
        position: 'absolute',
        width: '100%',
        height: 600,
    },
    userName: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 30,
        color: 'white'
    },
    location: {
        paddingLeft: 5,
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 14,
        color: 'white'
    },
    profileAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileInfo: {
        flexDirection: 'row',
        top: 45,
        left: 30,
    },

})