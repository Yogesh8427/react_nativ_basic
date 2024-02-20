import {
    StyleSheet,
    View,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native'
import { React, useState } from 'react'
import mainstyle from "../styles/style"
import Textcon from '../components/Textcon'
import Input from '../components/Input'
import Button from '../components/Button'
import Backbutton from '../components/Backbutton'
import navigationString from '../Navigation/navigationString'


const Singup = ({ navigation }) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const chekfirstname = /^([A-Za-z]+)$/g;
    const cheklastname = /^([A-Za-z]+)$/g;
    const emailpattern = /^([A-Za-z0-9]+)@([a-zA-Z0-9].{1,4}).([a-z]{2,20})$/g;
    const phonepattern = /^([6,7,8,9][0-9]+)$/g;
    const checkdata = () => {
        if (!chekfirstname.test(firstname.trim())) {
            alert("First name should contain only letters")
        } else if (!cheklastname.test(lastname.trim())) {
            alert('*last name should contain only letters')
        } else if (!emailpattern.test(email.trim())) {
            alert('*email should have in this "abc@gmail.com " format')
        } else if (mobile.length != 10) {
            alert('*Please enter a valid mobile number')
        } else if (!phonepattern.test(mobile)) {
            alert('*first degit should in between\'6,7,8,9\' and also should have 10 digits')
        }
        else {
            setfirstname("");
            setlastname("");
            setemail("");
            setmobile("");
            alert("*User Created Succesfully");
            navigation.navigate(navigationString.LOGIN);
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Backbutton onPress={() => { navigation.navigate(navigationString.LOGIN) }} />
                <Textcon heading={"Create new account"} discription={"Create an account so you can continue"} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 32 }}>
                    <Input placeholderdata={"First name"} newstyle={{ width: "48%" }} setdata={setfirstname} value={firstname} />
                    <Input placeholderdata={"Last name"} newstyle={{ width: "48%" }} setdata={setlastname} value={lastname} />
                </View>
                <Input placeholderdata={"Email"} newstyle={{ marginTop: 16 }} setdata={setemail} value={email} />
                <Input placeholderdata={"Mobile number"} newstyle={{ marginTop: 16 }} keyboardType={"number-pad"} maxLength={10}
                    setdata={setmobile} value={mobile} />
                <KeyboardAvoidingView style={{ marginTop: "90%" }} behavior='position' keyboardVerticalOffset={50}>
                    <Button name={"Next"} fun={checkdata} />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Singup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: mainstyle.themcolor
    }
})