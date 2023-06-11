import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Information from '../screen/Information';
const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="HomeMenu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Detail}
        name="DetailMenu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Information}
        name="InformationMenu"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
