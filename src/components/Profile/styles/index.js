import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button: {
        width: '47.5%',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        zIndex: 1000,
    },
    profileAvatar: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderColor: 'white',
    },
    profileAvatarShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    dimentions: {
        position: 'absolute',
        width: '100%',
        height: 550,
        flex: 1,
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
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    locationContainer: {
        flexDirection: 'row',
        top: 10
    },
    location: {
        top: -1,
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 17,
        color: '#696969',
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
    userName: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 30,
        color: '#696969',
        // paddingTop: 17,
    },
    sectionContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionTitle: {
        alignSelf: 'flex-start',
        fontSize: 22,
        color: '#696969',
        fontWeight: '600'
    },
    sectionButton: {
        alignSelf: 'flex-end',
        fontSize: 20,
        color: '#696969',
        fontWeight: '400',
    },
    sectionChild: {
        fontSize: 16,
        left: -3
    },

    profileContainer: {
        height: '100%',
        // paddingBottom: 545,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: "#FFF",
        paddingHorizontal: 25,
    },
})

export default styles;