import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import mainstyle from "../styles/style"
const Search = () => {
  return (
    <View style={styles.container}>
        <Text style={{textAlign:"center",marginTop:"70%",fontSize:100,color:mainstyle.buttoncolor}}>Search</Text>
    </View>
  )
}

export default Search
const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:24,
      backgroundColor:mainstyle.themcolor
  }
  })