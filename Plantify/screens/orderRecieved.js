import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicator';
import Elipse from '../assets/Ellipse.png';
import OrderLogo from '../assets/orderlogo.jpg';
import styles from './style';

function Order({ navigation, route }) {
  let [isloading, setLoader] = useState(false)

  return (
    <View style={[styles.w100, styles.h100, styles.bgWhite]}>
      <View style={[styles.m2, styles.positionRelative]}>
        <Image source={Elipse} style={[styles.positionAbsolute, { top: -100, left: 250 }]} />
        <TouchableOpacity onPress={() => { navigation.navigate("Bag") }} style={[styles.borderGrey, styles.border2, { backgroundColor: "#F8F8F8",zIndex:1, width: 50, borderRadius: 50, padding: 10, height: 50 }]} >
          <Icon style={{ marginLeft: 5 }} name="arrow-back-ios" color={"#004A61"} size={20} />
        </TouchableOpacity>
        <View style={[styles.w100, styles.alignItemsCenter, styles.justifyContentCenter, { marginTop: -40 }]}>
          <Image source={Elipse} />
        </View>
      </View>
      <View style={[styles.justifyContentCenter, styles.alignItemsCenter,styles.p2]}>

        <Text style={[styles.textGreen, styles.fsxl, styles.w50, styles.textCenter, styles.mb1, styles.textBold]}>Order Received</Text>
        <Text style={[styles.textBlack, styles.fs5, styles.w100,styles.textCenter,styles.mb5 ]}>Order Id: #293092309</Text>
        <View style={[styles.w100, styles.alignItemsCenter, styles.justifyContentCenter,styles.mb2]}>
          <Image source={OrderLogo} />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={[styles.bgGreen, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
        <Text style={[styles.textLight, styles.textBold, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "KIRIM"}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default Order