import { StyleSheet } from 'react-native';

const PRIMARY_COLOR = '#007bff';
const SECONDARY_COLOR = '#6c757d';

const styles = StyleSheet.create({
    containerDefault: {
        alignItems: 'center',
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 0,
        marginVertical: 10,
    },
    containerPrimary: {
        backgroundColor: PRIMARY_COLOR,
        borderColor: '#D3D3D3',
    },
    containerPrimaryOutline: {
        backgroundColor: 'transparent',
    },
    containerSecondary: {
        backgroundColor: SECONDARY_COLOR,
        borderColor: SECONDARY_COLOR,
    },
    containerSecondaryOutline: {
        backgroundColor: 'transparent',
    },
    containerLarge: {
        paddingVertical: 15,
    },
    containerSmall: {
        paddingVertical: 5,
    },
    containerDisabled: {
        opacity: 0.65,
    },

    // TextStyles
    textDefault: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
    },
    textPrimary: {

    },
    textPrimaryOutline: {
        color: 'black',
        fontWeight: '400',
    },
    textSecondary: {

    },
    textSecondaryOutline: {
        color: SECONDARY_COLOR,
    },
    textLarge: {
        fontSize: 20,
    },
    textSmall: {
        fontSize: 14,
    },
    textDisabled: {

    },
});

export default styles;