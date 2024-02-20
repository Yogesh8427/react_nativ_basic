import { react, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

const Form = () => {
    const [showpass, setshowpass] = useState(true);
    const [showconfpass, setshowconfpass] = useState(true);
    const [showeye, setshoweye] = useState(
        'https://static.thenounproject.com/png/506282-200.png'
    );
    const [showconeye, setshowconeye] = useState(
        'https://static.thenounproject.com/png/506282-200.png'
    );
    const [data, setdata] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const show = () => {
        showpass ? setshowpass(false) : setshowpass(true);
        showpass
            ? setshoweye('https://static.thenounproject.com/png/2540381-200.png')
            : setshoweye('https://static.thenounproject.com/png/506282-200.png');
    };
    const showconfeye = () => {
        showconfpass ? setshowconfpass(false) : setshowconfpass(true);
        showconfpass
            ? setshowconeye('https://static.thenounproject.com/png/2540381-200.png')
            : setshowconeye('https://static.thenounproject.com/png/506282-200.png');
    };

    const checkvalidation = () => {
        const firstname = /^([A-Za-z]+)$/g;
        const lastname = /^([A-Za-z]+)$/g;
        const emailpattern = /^([A-Za-z0-9]+)@([a-zA-Z0-9].{1,4}).([a-z]{2,20})$/g;
        const passwordpatter = /(?=.*[A-Z])(?=.*[a-z])(?=.*[@#%&]).{8,}/g;
        const { userName, firstName, lastName, email, password, confirmPassword } =
            data;
        if (
            userName.trim() == '' ||
            firstName.trim() == '' ||
            lastName.trim() == '' ||
            email.trim() == '' ||
            password == '' ||
            confirmPassword == ''
        ) {
            alert('*Please fill all the field properly');
        } else if (!firstname.test(firstName.trim())) {
            alert('*firstname field should have alphabets only');
        } else if (!lastname.test(lastName.trim())) {
            alert('*Lastname field should have alphabets only');
        } else if (!emailpattern.test(email.trim())) {
            alert(`*email should have in this "abc@gmail.com " format`);
        } else if (!passwordpatter.test(password)) {
            alert(
                "*password should have 8 character 1 uppercase 1 lowercase or also have 1 '@,#,%,&' special character"
            );
        } else if (password != confirmPassword) {
            alert('*confirm password should be same as Password field ');
        } else {
            alert(
                'Your all field data is correctly field and form submited succesfully'
            );
            setdata({
                userName: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }
    };
    return (
        <>
            <View
                label="form"
                style={{
                    marginTop: '5%',
                    backgroundColor: '#aba9a9',
                    paddingVertical: '10%',
                }}>
                <View label="username">
                    <Text style={{ ...style.lable, marginHorizontal: 20 }}>
                        User Name
                    </Text>
                    <TextInput
                        label="User Name"
                        placeholder="Enter Username"
                        style={{ ...style.inputtext, marginHorizontal: 20 }}
                        onChangeText={(text) => {
                            setdata({ ...data, userName: text });
                        }}
                        value={data.userName}
                        name="userName"
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 10,
                    }}>
                    <View label="First Name" style={{ width: '42%' }}>
                        <Text style={style.lable}>First Name</Text>
                        <TextInput
                            label="First Name"
                            placeholder="Enter First name"
                            style={style.inputtext}
                            onChangeText={(text) => {
                                setdata({ ...data, firstName: text });
                            }}
                            name="firstName"
                            value={data.firstName}
                        />
                    </View>
                    <View label="last Name" style={{ width: '42%' }}>
                        <Text style={style.lable}>Last Name</Text>
                        <TextInput
                            label="Last Name"
                            placeholder="Enter Last name"
                            style={style.inputtext}
                            onChangeText={(text) => {
                                setdata({ ...data, lastName: text });
                            }}
                            name="lastName"
                            value={data.lastName}
                        />
                    </View>
                </View>
                <View label="Email">
                    <Text
                        style={{ ...style.lable, textAlign: 'left', marginHorizontal: 20 }}>
                        Email
                    </Text>
                    <TextInput
                        label="Email"
                        placeholder="Enter Your Email"
                        style={{ ...style.inputtext, marginHorizontal: 20 }}
                        onChangeText={(text) => {
                            setdata({ ...data, email: text });
                        }}
                        name="email"
                        value={data.email}
                    />
                </View>
                <View label="Password">
                    <Text
                        style={{
                            ...style.lable,
                            textAlign: 'left',
                            marginHorizontal: 20,
                        }}>
                        Password
                    </Text>
                    <TextInput
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={showpass}
                        style={{ ...style.inputtext, marginHorizontal: 20 }}
                        onChangeText={(text) => {
                            setdata({ ...data, password: text });
                        }}
                        name="password"
                        value={data.password}
                    />
                    <TouchableOpacity
                        style={{
                            alignSelf: 'left',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: 0,
                            top: 40,
                        }}
                        onPress={show}>
                        <Image
                            source={{
                                uri: showeye,
                            }}
                            style={{ width: 100, height: 30, resizeMode: 'contain' }}
                        />
                    </TouchableOpacity>
                </View>
                <View label="Confirm Password">
                    <Text
                        style={{
                            ...style.lable,
                            textAlign: 'left',
                            marginHorizontal: 20,
                        }}>
                        Confirm Password
                    </Text>
                    <TextInput
                        label="Confirm Password"
                        placeholder="Enter Confirm Password"
                        secureTextEntry={showconfpass}
                        style={{ ...style.inputtext, marginHorizontal: 20 }}
                        onChangeText={(text) => {
                            setdata({ ...data, confirmPassword: text });
                        }}
                        name="confirmPassword"
                        value={data.confirmPassword}
                    />
                    <TouchableOpacity
                        style={{
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: 0,
                            top: 40,
                        }}
                        onPress={showconfeye}>
                        <Image
                            source={{
                                uri: showconeye,
                            }}
                            style={{ width: 100, height: 30, resizeMode: 'contain' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View label="Submit button">
                <TouchableOpacity
                    style={style.submit}
                    onPress={() => checkvalidation()}>
                    <Text style={{ fontSize: 25, textAlign: 'center', color: 'white' }}>
                        Sing up
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
const style = StyleSheet.create({
    inputtext: {
        padding: 5,
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: '#d1cfcf',
    },
    lable: {
        fontSize: 20,
        textAlign: 'left',
        margin: 5,
    },
    submit: {
        backgroundColor: 'skyblue',
        padding: '1%',
        marginVertical: '10%',
        marginHorizontal: '20%',
        borderRadius: 20,
    },
});
export default Form;
