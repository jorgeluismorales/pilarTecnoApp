import React, { Component } from 'react';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen()  {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="profile" component={Profile} />            
        </ProfileStack.Navigator>
    )
}