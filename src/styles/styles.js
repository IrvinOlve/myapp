import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileContainer: {
        paddingHorizontal: 10,
        paddingTop: 25,
        top: 100,
        height: '100%',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: "#FFF",
    },
    categoryTitle: {
        fontSize: 22,
        color: '#696969',
        fontWeight: '600',
        paddingBottom: 10,
    },
    backgroundProfileImage: {
        width: '100%',
        height: 430,
        position: 'absolute',
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
    profileInfo: {
        flexDirection: 'row',
        top: 35,
        left: 30,
    },
    profileFunctions: {
        left: 30,
        top: 35,
    },
    profileAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    statsContainer: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    statsNumbers: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 17,
        color: 'white',
    },
    statsTexts: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '200',
        color: 'white',
    },
    statsMiddleBox: {
        borderLeftColor: 'lightgrey',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightColor: 'lightgrey',
        borderRightWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
    },
    loginForm: {
        borderColor: 'lightgray',
        // backgroundColor: 'white',
        // borderWidth: 1,
        padding: 20,
        marginHorizontal: 20,
        marginTop: -100,
        borderRadius: 5,
    },
    loginFormRegister: {
        // borderColor: 'lightgray',
        // backgroundColor: 'white',
        // borderWidth: 1,
        padding: 20,
        marginHorizontal: 20,
        marginTop: -100,
        borderRadius: 5,
    },
    loginInputText: {
        borderColor: 'white',
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5,
        shadowColor: "#454D65",
        shadowOffset: { height: 7 },
        shadowRadius: 5,
        shadowOpacity: 0.25,
    },
    loginInputTextProfile: {
        borderColor: 'white',
        backgroundColor: 'white',
        marginTop: 25,
        paddingVertical: 12,
        paddingHorizontal: 100,
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "#454D65",
        shadowOffset: { height: 7, },
        shadowRadius: 5,
        shadowOpacity: 0.1,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: 'black',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },

});

export default styles;