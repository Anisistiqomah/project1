import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../screen/Profile';
import EditProfile from '../screen/EditProfile';
import Gallery from '../screen/Gallery';
import Login from '../screen/Login';
const Stack = createNativeStackNavigator();

export default function OrderStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="ProfileMenu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={EditProfile}
        name="EditProfileMenu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Gallery}
        name="GalleryMenu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Login}
        name="LoginMenu"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
