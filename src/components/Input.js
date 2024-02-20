import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Input = (props) => {
    return (
        <TextInput placeholder={props.placeholderdata} 
        style={{ ...style.input, ...props.newstyle }} 
        placeholderTextColor="#ffffff" secureTextEntry={props.password} {...props} onChangeText={props.setdata}/>
    )
}

const style = StyleSheet.create({
    input: {
        backgroundColor: "#4C4C4C",
        color: "#FFFFFF",
        height: 48,
        borderRadius: 8,
        paddingHorizontal: 16,
        opacity:0.5
    }
})
export default Input