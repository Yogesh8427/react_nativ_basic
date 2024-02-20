import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    keyboard,
    TouchableWithoutFeedback
} from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Textcon from '../components/Textcon'
import Button from '../components/Button'
import Backbutton from '../components/Backbutton'
import mainstyle from "../styles/style"
import store from '../Redux/store'
import{login} from "../Redux/userReduser"

const Login = ({ navigation }) => {
    const [mobile, setmobile] = useState("");
    const [password, setpassword] = useState("");
    const [show, setshow] = useState(true);
    const passwordpatter = /(?=.*[A-Z])(?=.*[a-z])(?=.*[@#%&]).{8,}/g;
    const phonepattern = /^([6,7,8,9][0-9]+)$/g;
    const changescreen = () => {
        if (mobile.length != 10) {
            alert('*Please enter a valid mobile number')
        } else if (!phonepattern.test(mobile)) {
            alert('*first degit should in between\'6,7,8,9\' and also should have 10 digits')
        }
        else if (!passwordpatter.test(password)) {
            alert("*password should have 8 character 1 uppercase 1 lowercase or also have 1 '@,#,%,&' special character")
        }
        else {
            setmobile("");
            setpassword("");
            store.dispatch(login(true));
            // navigation.navigate('Home');   
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={style.container} >
                <Backbutton />
                <Textcon heading={"Welcome back!"} discription={"We are happy to see.You can login to continue"} />
                <View>
                    {/* <PhoneInput/> */}
                    <Input placeholderdata={"Mobile number"} newstyle={{ marginTop: 32 }}
                        keyboardType={"number-pad"} maxLength={10} setdata={setmobile} value={mobile} />
                </View>
                <View>
                    <Input placeholderdata={"Password"} newstyle={{ marginTop: 16 }} value={password} password={show} setdata={setpassword} />
                    <TouchableOpacity style={{ position: "absolute", right: 16 }}
                        onPress={() => show ? setshow(false) : setshow(true)}>
                        <Text style={{ ...style.text, fontSize: 14, top: 33, opacity: 0.5 }}>{show ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ marginTop: 16 }}>
                        <Text style={{ ...style.text, fontSize: 13 }}>Use OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 16 }}>
                        <Text style={{ ...style.text, fontSize: 13, color: "#32C5FF" }}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView behavior='position' style={{ marginTop: "90%" }} keyboardVerticalOffset={40}>
                    <Button name="LOGIN" fun={changescreen} />
                    <View style={style.singup}>
                        <Text style={{ color: "#ffffff" }}>New here?</Text><TouchableOpacity onPress={() => { navigation.navigate("Singup") }}>
                            <Text style={{ color: "#41CCFF" }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: mainstyle.themcolor
    },
    text: {
        fontSize: 24,
        color: "#FFFFFF",
    },
    singup: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%"
    }
})

export default Login