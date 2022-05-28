import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../screens/LogInScreen';
import SignUp from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
