import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screen/Splashscreen';
import MainNavigator from './mainNavigation';
import AuthNavigator from './authNavigation';
const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={AuthNavigator}
          name="Auth"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={MainNavigator}
          name="Main"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
