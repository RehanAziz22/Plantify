import React, { useState } from 'react'
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './style'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from "axios";
import { BASE_URL } from '../config';
import { ToastAndroid } from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid';
export default function Signup({ navigation }) {
  let [model, setModel] = useState({})
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [isloading, setLoader] = useState(false)
  let [error, setError] = useState("")

  let signup = () => {
    setLoader(true)
    console.log(email, password)

    const objToSend = {
      firstName: "firstname",
      lastName: "lastname",
      email: email,
      password: password,
      mobileNumber: "123456789",
      dob: "DD/MM/YYYY"
    }

    axios.post(`${BASE_URL}signup`, objToSend)
      .then((res) => {
        console.log(res.data, "response");
        if (res.data.status) {
          //true

          navigation.navigate("Login")
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT)

          setLoader(false)
        } else {
          //false
          console.log(res.data.message)
          // alert(res.data.message)
          setError(res.data.message)
          setLoader(false)

        }
      }
      ).catch(
        (error) => { console.log(error, "error") }
      )

    // auth().createUserWithEmailAndPassword(model.email, model.password)
    //   .then((res) => {
    //     // Signed in
    //     let userId = res.user.uid;
    //     console.log(res.user.uid)
    //     database()
    //       .ref(`users/${userId}`)
    //       .set(model)
    //       .then(() => { navigation.navigate("BottomNav", userId) })
    //     // ...
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    //   });
  }
  return (<>
    <View style={[styles.alignItemsStart, styles.bgWhite, styles._black, styles.textBlack, styles.w100, styles.h100, styles.p3]}>

      <TouchableOpacity style={[styles.borderGrey, styles.border2, styles.mb2, { backgroundColor: "#F8F8F8", borderRadius: 50, padding: 10 }]} onPress={() => { navigation.navigate("Login") }}><Icon style={{ marginLeft: 5 }} name="arrow-back-ios" color={"#004A61"} size={20} /></TouchableOpacity>
      <Image source={require('../assets/plantify.jpg')} style={{ width: 200, height: 50 }} />
      <Text style={[{ fontFamily: "sanserif" }, styles.textGreen, styles.fsxl, styles.mb4, styles.w100, styles.mb2, styles.textBold]}>Signup</Text>
      <Text style={[styles.textGreen, styles.fs6, styles.mb4, styles.w100, styles.mb2,]}>Masukan NISN dan password untuk memulai beljar sekarang</Text>
      <Text style={[styles.textGrey, styles.fs5, styles.w100, styles.textBold]}>NISN</Text>
      <TextInput placeholderTextColor={"black"} placeholder='Nomor NISN' onChangeText={(e) => { setEmail(e) }} style={[styles.mb2, styles.input, styles.px2]} />
      <Text style={[styles.textGrey, styles.fs5, styles.w100, styles.textBold]}>NISN</Text>
      <TextInput placeholder='Nomor NISN' onChangeText={(e) => { setPassword(e) }} placeholderTextColor={"black"} style={[styles.input, styles.px2]} secureTextEntry={true} />
      <Text style={[styles.textDanger, styles.fs6, styles.mb5, styles.w100,]}>{error}</Text>
      <TouchableOpacity onPress={signup} style={[styles.bgGreen, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
        <Text style={[styles.textLight, styles.textBold, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "KIRIM"}</Text>
      </TouchableOpacity>
      <View style={[styles.flexRow, styles.w100, styles.justifyContentCenter]}>
        <Text style={[styles.textBlack, styles.fs6, styles.flexCenter, styles.fs6]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Login") }}><Text style={[styles.mx1, styles.textGreen, styles.textBold, styles.fs6]}>Login</Text></TouchableOpacity>
      </View>

    </View>

    {/* <View style={[styles.flexCenter, styles._black, styles.textBlack, styles.w100, styles.h100, styles.p3]}>
      <Text style={[styles.textBlack, styles.fs1, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>TASK MASTER </Text>
      <Text style={[styles.textBlack, styles.fs5, styles.mb4, styles.w100, styles.textCenter, styles.mb2, styles.textBold]}>Create Account</Text>
      <TextInput placeholder='username' onChangeText={e => setModel({ ...model, username: e })} placeholderTextColor={"white"} style={[styles.mb2, styles.input, styles.bgBlack,styles.textLight, styles.px2]} />
      <TextInput placeholder='email@gmail.com' onChangeText={e => setModel({ ...model, email: e })} placeholderTextColor={"white"} style={[styles.mb2, styles.input, styles.bgBlack,styles.textLight, styles.px2]} />
      <TextInput placeholder='**********' onChangeText={e => setModel({ ...model, password: e })} placeholderTextColor={"white"} style={[styles.mb2, styles.input, styles.bgBlack,styles.textLight, styles.px2]} secureTextEntry={true} />
      <TouchableOpacity onPress={signup} style={[styles.bgDanger, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
        <Text style={[styles.textBold, styles.fs6]}>Signup</Text>
      </TouchableOpacity>
      <View style={[styles.flexRow]}>
        <Text style={[styles.textBlack, styles.fs6, styles.flexCenter, styles.fs6]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Login") }}><Text style={[styles.mx1, styles.textDanger, styles.textBold, styles.fs6]}>Login</Text></TouchableOpacity>
      </View>

    </View> */}
  </>
  )
}
