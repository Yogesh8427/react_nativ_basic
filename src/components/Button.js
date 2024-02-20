import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from "../styles/style"

const Button = ({name,style,fun}) => {
  return (
   <TouchableOpacity onPress={fun} style={{...styles.button,...style}}>
    <Text style={{fontSize:14,marginVertical:16,color:"#ffffff"}}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:color.buttoncolor,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8
    }
})