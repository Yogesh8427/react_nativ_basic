import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Singup from '../screens/Singup';
import navString from "../Navigation/navigationString";

// const Stack = createNativeStackNavigator();
const Authrouter = (Stack) => {
    return (
        <>
            <Stack.Screen name={navString.LOGIN} component={Login} />
            <Stack.Screen name={navString.SINGUP} component={Singup} />
        </>
    )
}

export default Authrouter