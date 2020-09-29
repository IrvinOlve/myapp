
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import BottomSheet from 'reanimated-bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';

// Component
import Avatar from './Avatar';
import BackgroundImage from './BackgroundImage';
import Pictures from './Pictures';
import ActionButtons from './ActionButtons';
import Location from './Location';

export default Profile = ({ data, navigation, fromPost }) => {

    const { bio, avatar, name, location, cover, uid } = data;
    const current_user = auth().currentUser.uid;

    const currentUser = function checkUser() {
        return current_user == uid
    }

    const [loaded, setLoaded] = useState(false); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users

    useEffect(() => {
        const subscriber = firestore()
            .collection('users').doc(uid).collection('posts')
            .onSnapshot(querySnapshot => {
                const users = [];
                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setUsers(users);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    let open = false;
    const sheetRef = React.useRef(null);

    function BottomSheetPosition() {
        open = !open // Invert container status.
        if (!open) { // If container is closed, open it.
            return 1;
        }
        return 0;
    }

    const renderContent = () => {
        return (
            <View style={styles.profileContainer}>
                <View style={{ top: -15, alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name={'remove'} size={50} color={'lightgrey'} onPress={() => sheetRef.current.snapTo(BottomSheetPosition())} />
                </View>
                <View style={{ top: -15, marginHorizontal: 25, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar image={avatar} />
                        <View style={{ left: 27, top: 20 }}>
                            <Text style={styles.userName}>{name}</Text>
                            <Location data={location} />
                        </View>
                    </View>
                    <ActionButtons />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }} >

                    <View style={styles.aboutContainer}>
                        <Text style={[styles.categoryTitle, { paddingTop: 80, }]}>About</Text>
                        <Text style={{ fontSize: 16, }}>{bio}</Text>
                    </View>

                    <View style={styles.friendsContainer}>
                        <Text style={styles.categoryTitle}>Friends</Text>
                    </View>
                    <View style={styles.postsContainer}>
                        <Pictures navigation={navigation} posts={users} />
                    </View>
                </ScrollView>
            </View>

        );
    }

    const [isVisible, setIsVisible] = useState(true);


    return (
        <>
            <Header user={currentUser} navigation={navigation} fromPost={fromPost} />
            <BackgroundImage data={data} visible={isVisible} />
            <BottomSheet
                onOpenStart={() => setIsVisible(false)}
                onCloseStart={() => setIsVisible(true)}
                enabledInnerScrolling={true}
                enabledContentGestureInteraction={false}
                ref={sheetRef}
                snapPoints={[290, 680, 400]}
                renderContent={renderContent}
            />
        </>
    );
}

const styles = StyleSheet.create({
    userName: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 30,
        color: '#696969',
        // paddingTop: 17,
    },

    location: {
        // paddingLeft: 5,
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 17,
        color: '#696969',
    },

    profileContainer: {
        height: '100%',
        // paddingBottom: 545,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: "#FFF",
    },
    categoryTitle: {
        fontSize: 22,
        color: '#696969',
        fontWeight: '600',
        paddingBottom: 10,
    },

    postsContainer: {
        paddingTop: 30,
    },
    aboutContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 5,
        paddingBottom: 30,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    friendsContainer: {
        paddingTop: 40,
        marginHorizontal: 20,
        paddingHorizontal: 5,
        paddingBottom: 30,
    },
    feed: {
        flex: 1,
        marginHorizontal: 13.7,
        // top: 50,
    },
    postImageX: {
        marginHorizontal: 7,
        width: 115,
        height: 115,
        borderRadius: 10,
        marginVertical: 5,
    },

});