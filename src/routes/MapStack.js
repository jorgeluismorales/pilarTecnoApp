import React from 'react';
import Map from '../screens/Maps';
import { createStackNavigator } from '@react-navigation/stack';

const MapStack = createStackNavigator();

export default function MapStackScreen () {
    return(
        <MapStack.Navigator>
            <MapStack.Screen name="map" component={Map} />            
        </MapStack.Navigator>
    )
}