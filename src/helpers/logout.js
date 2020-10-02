import auth from '@react-native-firebase/auth';

export default function logout() {
    return auth().signOut()
}