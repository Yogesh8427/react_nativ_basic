import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import mainstyle from "../styles/style"


const Nodification = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{textAlign:"center",marginTop:"70%",fontSize:70,color:mainstyle.buttoncolor}}>Notification</Text>
    </View>
  )
}

export default Nodification

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24,
    backgroundColor:mainstyle.themcolor
}
})