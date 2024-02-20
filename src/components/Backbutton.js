import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import img from '../constants/image'
const Backbutton = (props) => {
    return (
        <TouchableOpacity style={styles.backbutton} {...props}>
            <Image source={img.backlogo} />
        </TouchableOpacity>
    )
}

export default Backbutton

const styles = StyleSheet.create({
    backbutton:{
        marginTop: 56 
    }
})