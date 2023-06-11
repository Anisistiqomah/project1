import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Order from '../screen/Order';
import History from '../screen/History';
import DetailOrder from '../screen/DetailOrder';
const Stack = createNativeStackNavigator();

export default function OrderStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Order}
        name="OrderMenu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={History}
        name="HistoryMenu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={DetailOrder}
        name="DetailOrderMenu"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
