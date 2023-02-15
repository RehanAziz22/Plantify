import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './style'

export default function SplashScreen({ navigation }) {
  let [isloading, setLoader] = useState(false)

  let navigateScreen = () => {
    navigation.navigate("Login")
  }
  return (<>
    <View style={[styles._black, styles.textBlack, styles.w100, styles.h100, styles.bgWhite]}>
      <Image source={require('../assets/splashscreen_logo.jpg')} style={[{ width: "100%", borderBottomLeftRadius: 40, borderBottomRightRadius: 40, height: 495, }]} />
      <View style={[styles.p2]}>

        <Text style={[{ fontFamily: "sanserif" }, styles.textGreen, styles.fsxl, styles.w70, styles.mb1, styles.textBold]}>GET READY BE HIGYENIC</Text>
        <Text style={[styles.textGreen, styles.fs6, styles.mb2, styles.w100,   ]}>Jelajahi AiLearn untuk menambah kemampuanmu dalam mengoperasikan Adobe Illustrator</Text>

        <TouchableOpacity onPress={navigateScreen} style={[styles.bgGreen, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
          <Text style={[styles.textLight, styles.textBold, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "Masuk"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
  )
}
