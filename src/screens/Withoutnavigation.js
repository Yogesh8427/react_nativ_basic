import { ScrollView, StyleSheet, Text, View } from 'react-native'
import mainstyle from "../styles/style"
import { React, useState } from 'react'
import Login from './Login'
import Singup from './Singup'
import Home from './Home'

const Withoutnavigation = () => {
  const [state, setstate] = useState("Login");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  return (
    <ScrollView style={style.container}>
      {/* <StatusBar backgroundColor={mainstyle.themcolor}/> */}
      {/* login screen */}
      {state == "Login" && <Login
        screen={setstate}
        setpassword={setpassword}
        password={password}
        setmobile={setmobile}
        mobile={mobile} />}

      {/* Singup screen */}
      {state == "Singup" && <Singup
        screen={setstate}
        setfirstname={setfirstname}
        firstname={firstname}
        setlastname={setlastname}
        lastname={lastname}
        email={email}
        setemail={setemail}
        setmobile={setmobile}
        mobile={mobile} />}

      {/* Home screen */}
      {state == "Home" && <Home screen={setstate} />}
    </ScrollView>

  )
}

export default Withoutnavigation

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: mainstyle.themcolor
  }
})