import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="LoginMenu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Signup}
        name="SignupMenu"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
