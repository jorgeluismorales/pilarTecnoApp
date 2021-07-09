import React from 'react';
import Home from '../screens/Home'
import PostsStack from '../routes/PostsStack';
import ProfileStack from '../routes/ProfileStack';
import MapStack from '../routes/MapStack'
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default function HomeStackScreen()  {
    return(
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name="home" component={Home} />                  
            <HomeStack.Screen name="PostsStack" component={PostsStack} />                  
            <HomeStack.Screen name="ProfileStack" component={ProfileStack} />                  
            <HomeStack.Screen name="MapStack" component={MapStack} />                  
        </HomeStack.Navigator>
    )
}