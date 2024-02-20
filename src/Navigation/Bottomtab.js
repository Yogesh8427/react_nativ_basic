import { View, Text, Image,StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import img from '../constants/image'
import Search from '../screens/Search';
import navString from "../Navigation/navigationString";
import Gallery from '../screens/Gallery';
import Nodification from '../screens/Nodification';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const Bottomtab = () => {
  let options= (img)=>{
    return{
    tabBarIcon: ({ focused }) => (
      <Image source={img} style={focused ? { tintColor: "red" } : null} />
    )
  }}
  return (
    <Tab.Navigator initialRouteName={navString.HOME} screenOptions={{
      headerShown: false,
      tabBarLabel: "",
      tabBarActiveTintColor: "#567898",
      tabBarStyle: styles.tabbar,
    }}>
      <Tab.Screen name={navString.HOME} component={Home} options={options(img.homelogo)} />
      <Tab.Screen name={navString.SEARCH} component={Search} options={options(img.searchlogo)}/>
      <Tab.Screen name={navString.GALLERY} component={Gallery} options={options(img.addgallerylogo)}/>
      <Tab.Screen name={navString.NODIFICATION} component={Nodification} options={options(img.nodificationlogo)}/>
      <Tab.Screen name={navString.PROFILE} component={Profile} options={options(img.profilelogo)} />
    </Tab.Navigator>
  )
}

export default Bottomtab

const styles=StyleSheet.create({
  tabbar:{
    backgroundColor: '#4C4C4C',
    height: 80,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: -8,
    borderTopWidth: 0
  }
})