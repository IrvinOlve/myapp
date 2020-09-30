import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomSheet from 'reanimated-bottom-sheet';
export default function _BottomSheet(props) {

    console.log(props.children)
    const { children } = props;
    const sheetRef = React.useRef(null);

    function renderContent(content) {
        <View style={styles.profileContainer}>
            <View style={{ marginTop: -15, alignItems: "center", justifyContent: "center" }}>
                <Ionicons name={'remove'} size={50} color={'lightgrey'} onPress={() => sheetRef.current.snapTo(BottomSheetPosition())} />
            </View>

            {content}
        </View>
    }

    return (
        <>


            <BottomSheet
                onOpenStart={() => setIsVisible(false)}
                onCloseStart={() => setIsVisible(true)}
                enabledInnerScrolling={true}
                enabledContentGestureInteraction={false}
                ref={sheetRef}
                snapPoints={[290, 680, 400]}
                renderContent={renderContent(children)}
            />
        </>
    )
}

const styles = StyleSheet.create({

    profileContainer: {
        height: '100%',
        // paddingBottom: 545,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: "#FFF",
        paddingHorizontal: 25,
    },
})
