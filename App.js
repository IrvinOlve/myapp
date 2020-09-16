import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import LoginScreen from './src/screens/index/LoginScreen';
import HomeScreen from './src/screens/auth/HomeScreen';
import RegisterScreen from './src/screens/index/RegisterScreen';

const AppStack = createStackNavigator();

export default App = () => {
  const isSignedIn = auth().currentUser;

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false, }}
        initialRouteName={isSignedIn ? 'HomeScreen' : 'LoginScreen'} >
        <AppStack.Screen name="LoginScreen" component={LoginScreen} />
        <AppStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <AppStack.Screen name='HomeScreen' component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer >
  );
};
