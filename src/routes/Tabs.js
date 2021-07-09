import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import Home from '../screens/Home';
import HomeStackScreen from '../routes/HomeStack';
import PostsStackScreen from '../routes/PostsStack';
import ProfileStackScreen from '../routes/ProfileStack';
import MapStackScreen from '../routes/MapStack'
//import Posts from '../screens/Posts';
//import Profile from '../screens/Profile';
import Maps from '../screens/Maps';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="address-card" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="Posts" component={PostsStackScreen} options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="edit" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="Map" component={MapStackScreen} options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="map" color={color} size={26} />
        ),
      }}/>
    </Tab.Navigator>
  );
}