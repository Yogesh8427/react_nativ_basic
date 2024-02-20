import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import mainstyle from "../styles/style"
import store from '../Redux/store'
import { logout } from '../Redux/userReduser'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{textAlign:"center",marginTop:"70%",fontSize:100,color:mainstyle.buttoncolor}}>Home</Text>
        <Button name={"logout"} fun={()=>{store.dispatch(logout(false))}}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24,
    backgroundColor:mainstyle.themcolor
}
})