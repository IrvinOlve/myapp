
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import BottomSheet from 'reanimated-bottom-sheet';

// Component
import BackgroundImage from './BackgroundImage';
import Pictures from './Pictures';
import Section from './Section';
import Separator from '../Separator';
import ProfileCard from './ProfileCard';
import Header from './Header'



import styles from './styles'

export default Profile = ({ data, navigation, fromPost }) => {

    const { bio, avatar, name, location, uid } = data;

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
            <>
                <View style={styles.profileContainer}>
                    <View style={{ marginTop: -15, alignItems: "center", justifyContent: "center" }}>
                        <Ionicons name={'remove'} size={50} color={'lightgrey'} onPress={() => sheetRef.current.snapTo(BottomSheetPosition())} />
                    </View>

                    <ProfileCard navigation={navigation} avatar={avatar} name={name} location={location} />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, marginTop: 70, paddingTop: 20, }} >
                        <Section title={'About'}>
                            <Text>{bio}</Text>
                        </Section>

                        <Separator top={30} bottom={30} />

                        <Section title={'Friends'}>

                        </Section>

                        <Section title={'Photos'} rightButton={'View All'} onPress={() => navigation.navigate('PicturesScreen', { posts: users })} >
                            <Pictures navigation={navigation} posts={users} />
                        </Section>
                    </ScrollView>
                </View>
            </>
        );
    }

    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <Header user={data} navigation={navigation} fromPost={fromPost} />
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
