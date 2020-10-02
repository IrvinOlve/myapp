
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, ActionSheetIOS } from 'react-native';
import currentUser from '../../helpers/currentUser'
import styles from './styles'
export default Header = ({ user, navigation, fromPost }) => {

    const { uid } = user;

    function checkUser() {
        return currentUser() == uid
    }


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

    function ProfileHeaderSwitcher() {
        if (checkUser() && fromPost) {
            return (
                <View style={[styles.headerLeft, styles.iconShadow]}>
                    <Ionicons
                        name={'arrow-back-outline'}
                        size={25} color={'white'}
                        onPress={() => navigation.goBack()} />
                </View>
            )
        } else if (checkUser() && !fromPost) {
            return (
                <View style={[styles.headerRight, styles.iconShadow]}>
                    <Ionicons name={'settings-outline'} size={25} color={'white'} onPress={() => navigation.navigate('SettingsScreen')} />
                </View>
            )
        } else if (!checkUser()) {
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