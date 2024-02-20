import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import Bottomtab from './Bottomtab';
import navString from "../Navigation/navigationString"

// const Stack = createNativeStackNavigator();
const Mainrouter = (Stack) => {
    return (
        <>
            <Stack.Screen name={navString.HOME} component={Bottomtab} />

        </>
    )
}

export default Mainrouter