import React from 'react'
import { View, Text, Alert, ActionSheetIOS } from 'react-native'
import currenUser from './currentUser'
import removeComment from './removeComment'

export default function commentOptions({ data }) {

    // Comment and post identifiers.
    const { poster_uid, post_key, comment_key, uid } = data

    const userOptions_OwnComment = () => {

        const createTwoButtonAlert = () =>
            Alert.alert(
                "Delete comment",
                "Are you sure?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "Yes", onPress: () => {
                            removeComment({
                                poster_uid: poster_uid,
                                post_key: post_key,
                                comment_key: comment_key,
                            })
                        }
                    }
                ],
                { cancelable: false }
            );

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Delete"],
                destructiveButtonIndex: [1],
                cancelButtonIndex: 0
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    // cancel action
                } else if (buttonIndex === 1) {
                    createTwoButtonAlert()
                }
                else if (buttonIndex === 2) {
                    alert('Comment reported')
                }
            }
        );
    }

    const userOptions_NotMyComment = () => {

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Report"],
                destructiveButtonIndex: [1],
                cancelButtonIndex: 0
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    // cancel action
                } else if (buttonIndex === 1) {
                    alert('Comment reported')
                }
            }
        );
    }

    function optionsToggler() {
        if (currenUser() === uid) {
            return userOptions_OwnComment();
        }
        return userOptions_NotMyComment();
    }

    return optionsToggler();
}
