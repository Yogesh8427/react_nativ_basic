import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Textcon = (props) => {
    return (
        <View style={{ marginTop: 16 }}>
            <Text style={style.text}>{props.heading}</Text>
            <Text style={style.discription}>{props.discription}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    text: {
        fontSize: 24,
        color: "#FFFFFF",
        marginTop: 11.5
    },
    discription: {
        fontSize: 15,
        color: "#A6A6A6",
        lineHeight: 32,
        marginBottom: 9
    }
})
export default Textcon