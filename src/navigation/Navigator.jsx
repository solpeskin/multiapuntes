import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import PostList from '../screens/PostList';
import Home from '../screens/Home';
import Header from "../components/Header"

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='PostList'
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="PostList"
                    component={PostList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;
