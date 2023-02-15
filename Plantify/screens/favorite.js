
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Alovera from '../assets/homepage/aloevera.png'
import BirdsNest from '../assets/homepage/birdsNest.png'
import Croton from '../assets/homepage/croton.png'
import Watermelon from '../assets/homepage/watermelon.png'
import Peperomia from '../assets/homepage/Peperomia.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Pressable,
    TouchableWithoutFeedback,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './style';
import axios from 'axios';
import { BASE_URL } from '../config';
function Favorite({ navigation, route }) {
    let [userId, setUserId] = useState(0)

    const [productArray, setProductArray] = useState([])
    const [refresh, setRefresh] = useState(false)
    let [product, setProduct] = useState([
        {
            id: 1,
            name: "Peperomia",
            product: "Air Purifier",
            price: "$400",
            source: Peperomia,
            bgColor: "#9CE5CB",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5''"
        },
        {
            id: 2,
            name: "Watermelon",
            product: "Air Purifier",
            price: "$300",
            source: Watermelon,
            bgColor: "#FFE899",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5''"
        },
        {
            id: 3,
            name: "Croton Petra",
            product: "Air Purifier",
            price: "$200",
            source: Croton,
            bgColor: "#56D1A7",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5''"
        },
        {
            id: 4,
            name: "Bird's Nest Fern",
            product: "Air Purifier",
            price: "$160",
            source: BirdsNest,
            bgColor: "#B2E28D",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5''"
        },
        {
            id: 5,
            name: "Cactus",
            product: "Air Purifier",
            price: "$260",
            source: Croton,
            bgColor: "#DEEC8A",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",

        },
        {
            id: 6,
            name: "Aloe Vera",
            product: "Air Purifier",
            price: "$210",
            source: Alovera,
            bgColor: "#F5EDA8",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5''"
        }
    ])
    // let checkUser = () => {
    //     const user = auth().currentUser;
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         // ...
    //         var uid = user.uid;
    //         console.log(uid)
    //         setUserId(uid)
    //     } else {
    //         // No user is signed in.
    //     }
    // }
    // useEffect(() => {
    //     checkUser()
    // }, [])

    const removefavotite = (id) => {
        console.log(id, "id");
        axios.delete(`${BASE_URL}favoriteproduct/${id}`)
            .then((res) => {
                if (res.data.status) {
                    //true
                    setRefresh(!refresh);
                    console.log(res.data, "true")
                } else {
                    //false
                    alert(res.data.message);
                    console.log(res.data, "false")

                }
            }
            )
            .catch(
                (error) => { console.log(error, "error") }
            )
    }
    useEffect(() => {
        axios.get(`${BASE_URL}favoriteproduct`).then(
            (response) => {
                console.log(response.data, "responsedata");
                let data = response.data.data
                // setProductArray([...new Set(data.map(item => item.id))])
                setProductArray(data)
            }
        ).catch(
            (err) => { console.log(err, "error") }
        )
    }, [refresh])
    return <View style={[styles.h100, styles.bgWhite,]}>
        {/* -----------------------------appbar */}
        <View style={[styles.flexRow, styles.p2, styles.alignItemsCenter, styles.justifyContentBetween]}>
            <Image source={require('../assets/plantify.jpg')} style={[{ width: 180, height: 40 }]} />


            <View style={styles.flexRow}>

                <TouchableOpacity style={[]}>
                    <Icon color={styles._black} size={30} style={[styles.mx1]} name="notifications" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('togglemenu')} style={[]}>
                    <Icon color={styles._black} size={30} style={[styles.mx1]} name="menu" />
                </TouchableOpacity>
            </View>
        </View>

        {/* -------------------------------body */}
        <ScrollView >
            <View style={[styles.p2]}>
                {/* ------------------------banner image */}
                {/* <Image source={require('../assets/addvertizment.jpg')} style={[styles.rounded, styles.mb3, { width: "100%", height: 195, }]} /> */}

                <View style={[styles.flexRow, styles.justifyContentBetween]}>
                    <View style={[{ borderColor: styles._black, borderWidth: 1, }, styles.w75, styles.flexRow, styles.alignItemsCenter, styles.rounded, styles.px2]}>
                        <Icon name="search" color={"black"} size={30} />
                        <TextInput placeholder='Search ' onChangeText={(e) => { setPassword(e) }} placeholderTextColor={"black"} style={[styles.w75, styles.fs5, styles.px2]} />
                        <Icon name="filter-center-focus" color={"black"} size={30} />
                    </View>
                    <View style={[{ borderColor: styles._black, borderWidth: 1, }, styles.w20, styles.flexRow, styles.alignItemsCenter, styles.rounded, styles.px2]}>

                        <Icon name="tune" color={"black"} size={30} />
                    </View>

                </View>

                {/* //-----------------------links */}

                <View style={[styles.m1]}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity style={[]} onPress={() => { navigation.navigate("") }}>
                            <Text style={[styles.textBlack, styles.fs6, styles.m1, styles.textBold]}>Top Picks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[]} onPress={() => { navigation.navigate("") }}>
                            <Text style={[styles.textBlack, styles.fs6, styles.m1, styles.textBold]}>Indoor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[]} onPress={() => { navigation.navigate("") }}>
                            <Text style={[styles.textBlack, styles.fs6, styles.m1, styles.textBold]}>Outdoor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[]} onPress={() => { navigation.navigate("") }}>
                            <Text style={[styles.textBlack, styles.fs6, styles.m1, styles.textBold]}>Seeds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[]} onPress={() => { navigation.navigate("") }}>
                            <Text style={[styles.textBlack, styles.fs6, styles.m1, styles.textBold]}>Plants</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[]} onPress={() => { navigation.navigate("") }}>
                            <Text style={[styles.textBlack, styles.fs6, styles.m1, styles.textBold]}>more</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                {/*//-------------------------products  */}
                <View style={[styles.m1]}>
                    {
                        productArray.map((e) => {
                            return <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', e)} key={e._id} style={[styles.my1, styles.mb4, styles.positionRelative]}>
                                <Image source={e.source} style={[styles.rounded, styles.mb3, { width: 135, height: 180, top: -40, position: "absolute", left: 170, zIndex: 1 }]} />
                                <View style={[{ backgroundColor: e.bgColor, borderTopLeftRadius: 30, borderBottomLeftRadius: 20, borderTopRightRadius: 160, borderBottomRightRadius: 60, width: "80%", }, styles.py1, styles.px1]}>
                                    <Text style={[styles.textBlack, styles.fs6, styles.mx1,]}>{e.product} <Icon color={styles._green} size={20} style={[styles.mx1]} name="eco" /></Text>
                                    <Text style={[styles.textBlack, styles.fs2, styles.mx1, styles.mb1, styles.textBold]}>{e.name}</Text>

                                    <View style={[styles.flexRow, styles.alignItemsCenter,]}>
                                        <Text style={[styles.textBlack, styles.fs4, styles.my2, styles.m1, styles.textBold, { marginRight: 40 }]}>{e.price}</Text>
                                        <TouchableOpacity onPress={() => removefavotite(e._id)}>

                                            <Icon color={styles._danger} size={30} style={[styles.mx1]} name="favorite" />
                                        </TouchableOpacity>

                                        <Icon color={styles._green} size={30} style={[styles.mx1]} name="local-mall" />

                                    </View>
                                </View>
                            </TouchableOpacity>
                        })
                    }
                </View>


            </View>
        </ScrollView>

    </View>
}

export default Favorite;
