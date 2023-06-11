import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import BottomNav from '../components/bottomNav'; //komponen
import Home from './homeNavigation';
import Order from './orderNavigation';
import Profile from './profileNavigation';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNav {...props} />}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
