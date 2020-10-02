import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    comments: {
        paddingTop: 20,
    },
    username: {
        fontWeight: '400',
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    time: {
        fontWeight: '700',
        fontSize: 10,
        color: 'lightgrey',
        paddingTop: 3
    },
    comment: {
        fontSize: 15,
        paddingTop: 10,
        left: 3,
        marginRight: 50
    },
    textContainer: {
        paddingTop: 5,
    },
    avatar: {
        marginTop: 5,
        height: 45,
        width: 45,
        borderRadius: 50,
    },
    commentContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 10,
        paddingVertical: 10,
        marginLeft: 15,
        marginBottom: 20,
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'white',

        // Shadow 
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.1,
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        paddingVertical: 10,
        paddingLeft: 25,
        paddingRight: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    input: {
        width: 300,
    },
})

export default styles;