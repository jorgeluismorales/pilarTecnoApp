import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs  from './Tabs';
import Login from '../screens/Login'

const Stack = createStackNavigator();

export default AppStack = (props) => {
   const isLoged = true
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            {
                isLoged? (
                    <Stack.Screen name="Appstack" component={Tabs} />
                ) : (
                    <Stack.Screen name="Login" component={Login} />
                )
            }
        </Stack.Navigator>
    )
}