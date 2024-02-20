import { React, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Authrouter from './Authrouter'
import Mainrouter from './Mainrouter'
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Routers = () => {
  const user=useSelector((state)=>state.user)
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      {user ?Mainrouter(Stack): Authrouter(Stack)}
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routers
