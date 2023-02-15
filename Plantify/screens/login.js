import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import styles from './style'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios';
import { BASE_URL } from '../config';

export default function Login({ navigation }) {
  let [isloading, setLoader] = useState(false)
  let [error, setError] = useState("")
  let [user, setUser] = useState()
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  
  let login = () => {
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

    axios.post(`${BASE_URL}login`, objToSend)
      .then((res) => {
        // console.log(res, "response");
        if (res.data.status) {
          //true
          // setUser(res.data)
          // console.log(user, "response");
          let userId= res.data.user._id
          console.log(userId)
          navigation.navigate("BottomNav",userId)
          setLoader(false)
          console.log(res.data.message, "response");
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT)

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
  }

  // let login = () => {
  //   setLoader(true)
  //   // navigation.navigate("BottomNav")
  //   const objToSend = {
  //     email: email,
  //     password: password,
  //   }

  //   axios.post(`${BASE_URL}signup`, objToSend)
  //     .then((res) => {
  //       // console.log(res, "response");
  //       if (res.data.status) {
  //         //true
  //         navigation.navigate("BottomNav")
  //         setLoader(false)

  //       } else {
  //         //false
  //         console.log(res.data.message)
  //         // alert(res.data.message)
  //         setError(res.data.message)
  //         setLoader(false)
  //       }
  //     }
  //     ).catch(
  //       (error) => { console.log(error, "error") }
  //     )

  // auth().signInWithEmailAndPassword("user3@user.com", "useruser")
  //   .then((userCredential) => {
  //     // Signed in
  //     var userId = userCredential.user.uid;
  //     console.log(userId)
  //     navigation.navigate("BottomNav", userId)
  //     ToastAndroid.show("Login Successfully", ToastAndroid.SHORT)
  //     setLoader(false)

  //     // ...
  //   })
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     setLoader(false)
  //   });

  // }

  return (<>
    <View style={[styles.alignItemsStart, styles.bgWhite, styles._black, styles.textBlack, styles.w100, styles.h100, styles.p3]}>

      <TouchableOpacity style={[styles.borderGrey, styles.border2, styles.mb2, { backgroundColor: "#F8F8F8", borderRadius: 50, padding: 10 }]} onPress={() => { navigation.navigate("SplashScreen") }}><Icon style={{ marginLeft: 5 }} name="arrow-back-ios" color={"#004A61"} size={20} /></TouchableOpacity>

      <Image source={require('../assets/plantify.jpg')} style={{ width: 200, height: 50 }} />
      <Text style={[{ fontFamily: "sanserif" }, styles.textGreen, styles.fsxl, styles.w100, styles.mb1, styles.textBold]}>Login</Text>
      <Text style={[styles.textGreen, styles.fs6, styles.mb5, styles.w100,]}>Masukan NISN dan password untuk memulai beljar sekarang</Text>
      <Text style={[styles.textGrey, styles.fs5, styles.w100, styles.textBold]}>Username/Email</Text>
      <TextInput placeholderTextColor={"black"} placeholder='Masukan Password' onChangeText={(e) => { setEmail(e) }} style={[styles.mb2, styles.input, styles.px2]} />
      <Text style={[styles.textGrey, styles.fs5, styles.w100, styles.textBold]}>Password</Text>
      <TextInput placeholder='Masukan Password' onChangeText={(e) => { setPassword(e) }} placeholderTextColor={"black"} style={[styles.input, , styles.px2]} secureTextEntry={true} />
      <Text style={[styles.textDanger, styles.fs6, styles.w100,]}>{error}</Text>
      <Text style={[styles.textBlack, styles.fs6, styles.w100, styles.textBold, styles.textRight, styles.mb5, { textDecorationLine: "underline" }]}>Lupa Password</Text>
      <TouchableOpacity onPress={login} style={[styles.bgGreen, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
        <Text style={[styles.textLight, styles.textBold, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "MULAI BELAJAR"}</Text>
      </TouchableOpacity>
      <View style={[styles.flexRow, styles.w100, styles.justifyContentCenter]}>
        <Text style={[styles.textBlack, styles.fs6, styles.flexCenter, styles.fs6]}>Are you new here?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}><Text style={[styles.mx1, styles.textGreen, styles.textBold, styles.fs6]}>Signup</Text></TouchableOpacity>
      </View>

    </View>
  </>
  )
}
