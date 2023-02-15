import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MYButton from '../components/MYButton'
import styles from './style'
import Alovera from '../assets/homepage/aloevera.png'
import BirdsNest from '../assets/homepage/birdsNest.png'
import Croton from '../assets/homepage/croton.png'
import Watermelon from '../assets/homepage/watermelon.png'
import Peperomia from '../assets/homepage/Peperomia.png'
import Scan from '../assets/scan.png'
import axios from 'axios'
import { ToastAndroid } from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid'
import { BASE_URL } from '../config'

export default function ProductDetails({ navigation, route }) {
    let [iconName, setIconName] = useState("")
    let [product, setProduct] = useState([
        {
            id: 1,
            name: "Peperomia",
            product: "Air Purifier",
            price: "$400",
            source: Peperomia,
            bgColor: "#9CE5CB",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5"
        },
        {
            id: 2,
            name: "Watermelon",
            product: "Air Purifier",
            price: "$300",
            source: Watermelon,
            bgColor: "#FFE899",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5"
        },
        {
            id: 3,
            name: "Croton Petra",
            product: "Air Purifier",
            price: "$200",
            source: Croton,
            bgColor: "#56D1A7",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5"
        },
        {
            id: 4,
            name: "Bird's Nest Fern",
            product: "Air Purifier",
            price: "$160",
            source: BirdsNest,
            bgColor: "#B2E28D",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5"
        },
        {
            id: 5,
            name: "Cactus",
            product: "Air Purifier",
            price: "$260",
            source: Croton,
            bgColor: "#DEEC8A",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "6"

        },
        {
            id: 6,
            name: "Aloe Vera",
            product: "Air Purifier",
            price: "$210",
            source: Alovera,
            bgColor: "#F5EDA8",
            bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
            size: "5"
        }
    ])
    // let [ratings, setRatings] = useState(4)
    // let [stars, setStars] = useState([])

    let addToCart = (e) => {
        // console.log(e)
        const objToSend = {
            id: e.id,
            name: e.name,
            product: e.product,
            price: e.price,
            quantity:1,
            source: e.source,
            bgColor: e.bgColor,
            bio: e.bio,
            size: e.size,
        };
        axios.post(`${BASE_URL}cartproduct`, objToSend)
            .then((res) => {
                console.log(res.data, "response");
                if (res.data.status) {
                    //true

                    // ToastAndroid.show(res.data.message, ToastAndroid.SHORT)
                    console.log(res.data.message)

                    // setLoader(false)
                } else {
                    //false
                    console.log(res.data.message)
                    // alert(res.data.message)
                    
                    ToastAndroid.show(res.data.message, ToastAndroid.SHORT)
                    // setLoader(false)

                }
            }
            ).catch(
                (error) => { console.log(error, "error") }
            )
    }

    let addToFav = (e) => {
        // console.log(e)
        axios.post(`${BASE_URL}favoriteproduct`, e)
            .then((res) => {
                console.log(res.data, "response");
                if (res.data.status) {
                    //true

                    // ToastAndroid.show(res.data.message, ToastAndroid.SHORT)
                    console.log(res.data.message)

                    // setLoader(false)
                } else {
                    //false
                    console.log(res.data.message)
                    // alert(res.data.message)
                    
                    ToastAndroid.show(res.data.message, ToastAndroid.SHORT)
                    // setLoader(false)

                }
            }
            ).catch(
                (error) => { console.log(error, "error") }
            )
    }
    let obj = route.params
    console.log(obj)


    return (
        <View style={[styles.h100, styles.bgWhite,]}>
            <View style={[styles.flexRow, styles.w100, styles.pb1,styles.pt2,styles.px2, styles.alignItemsCenter, styles.justifyContentBetween, styles.positionAbsolute, { zIndex: 1, backgroundColor:obj.bgColor }]}>
                <Image source={require('../assets/plantifybg.png')} style={[{ width: 180, height: 40 }]} />


                <View style={styles.flexRow}>

                    <TouchableOpacity style={[]}>
                        <Icon color={styles._black} size={30} style={[styles.mx1]} name="notifications" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('togglemenu')} style={[]}>
                        <Icon color={styles._black} size={30} style={[styles.mx1]} name="menu" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={[styles.rounded, styles.shadow6, styles.bgWhite,]}>
                <View style={[styles.positionRelative, { height: 400 }]}>
                    <View style={[styles.px3, styles.pt5, { backgroundColor: obj.bgColor, height: 370, borderBottomLeftRadius: 70, borderBottomRightRadius: 220 }]}>

                        <Text style={[styles.textBlack, styles.fs4, styles.mt2]}>{obj.product} <Icon color={styles._green} size={20} style={[styles.mx1]} name="eco" /></Text>
                        <Text style={[styles.textBlack, styles.fsxl, styles.mb4, styles.textBold]}>{obj.name}</Text>
                        <Text style={[styles.textBlack, styles.fs6,]}>Price</Text>
                        <Text style={[styles.textBlack, styles.fs4, styles.mb2, styles.textBold]}>{obj.price}</Text>
                        <Text style={[styles.textBlack, styles.fs6,]}>Size</Text>
                        <Text style={[styles.textBlack, styles.fs4, styles.mb4, styles.textBold]}>{obj.size}</Text>

                        <View style={[styles.flexRow, styles.w45, styles.justifyContentBetween]}>
                            <TouchableOpacity onPress={() => addToCart(obj)} style={[styles.bgWhite, styles.p1, styles.shadow4, { borderRadius: 25 }]}>
                                <Icon color={styles._green} size={40} name="local-mall" />

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => addToFav(obj)} style={[styles.bgWhite, styles.p1, styles.shadow4, { borderRadius: 25 ,zIndex:10}]}>
                                <Icon color={styles._black} size={40} name="favorite" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image source={obj.source} style={[styles.rounded, styles.mb3, { width: 227, height: 250, top: 150, position: "absolute", left: 130, }]} />
                </View>

                <View style={[styles.p2]}>
                    <View style={[styles.mb2]}>
                        {/*------------------------------------ overview */}
                        <Text style={[styles.textBlack, styles.fs5, styles.textBold]}>Overview</Text>

                        <View style={[styles.justifyContentBetween, styles.flexRow]}>
                            <View style={[styles.flexRow, styles.alignItemsCenter]}>
                                <Icon color={"#FCCC1F"} size={30} style={[styles.mx1]} name="opacity" />
                                <View>
                                    <Text style={[styles.textBlack, styles.fs5, styles.textGreen, styles.textBold]}>250ml</Text>
                                    <Text style={[styles.textBlack, styles.fs6, styles.mb1,]}>WATER</Text>
                                </View>
                            </View>
                            <View style={[styles.flexRow, styles.alignItemsCenter]}>
                                <Icon color={"#FCCC1F"} size={30} style={[styles.mx1]} name="wb-sunny" />
                                <View>
                                    <Text style={[styles.textBlack, styles.fs5, styles.textGreen, styles.textBold]}>250ml</Text>
                                    <Text style={[styles.textBlack, styles.fs6, styles.mb1,]}>WATER</Text>
                                </View>
                            </View>
                            <View style={[styles.flexRow, styles.alignItemsCenter]}>
                                <Icon color={"#FCCC1F"} size={30} style={[styles.mx1]} name="grain" />
                                <View>
                                    <Text style={[styles.textBlack, styles.fs5, styles.textGreen, styles.textBold]}>250ml</Text>
                                    <Text style={[styles.textBlack, styles.fs6, styles.mb1,]}>WATER</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.mb2]}>
                        {/* ------------------------------Plant bio */}
                        <Text style={[styles.textBlack, styles.fs5, styles.textBold]}>Plant Bio</Text>
                        <Text style={[styles.textBlack, styles.fs6, styles.mb1,]}>{obj.bio}</Text>
                    </View>

                    <View>
                        {/* ------------------------------Plant bio */}
                        <Text style={[styles.textBlack, styles.fs5, styles.textBold]}>Similar Plants</Text>
                        <ScrollView horizontal={true}>
                            {product.map((e) => {
                                return <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', e)} key={e.id} style={[styles.my1, styles.mb4, styles.positionRelative, styles.py3, { width: 200 }]}>
                                    <Image source={e.source} style={[styles.rounded, styles.mb3, { width: 72, height: 80, top: -3, position: "absolute", left: 110, zIndex: 1 }]} />
                                    <View style={[{ backgroundColor: e.bgColor, borderRadius: 20, width: "80%", }, styles.py1, styles.px1]}>
                                        <Text style={[styles.textBlack, styles.fs6, styles.mx1,]}>{e.product} <Icon color={styles._green} size={20} style={[styles.mx1]} name="eco" /></Text>
                                        <Text style={[styles.textBlack, styles.fs4, styles.mx1, styles.mb1, styles.textBold]}>{e.name.slice(0, 13)}</Text>

                                        <View style={[styles.flexRow, styles.alignItemsCenter,]}>
                                            <Text style={[styles.textBlack, styles.fs5, styles.my2, styles.m1, styles.textBold, { marginRight: 20 }]}>{e.price}</Text>
                                            <Icon color={styles._black} size={20} style={[styles.mx1]} name="favorite" />

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            })}

                        </ScrollView>
                    </View>
                </View>

                <View style={[{ backgroundColor: "#F5EDA8" }, styles.p3, styles.flexRow]}>

                    <View style={[styles.w50]}>
                        <Text style={[styles.textBlack, styles.fs5, styles.textBold]}>That very plant?</Text>
                        <Text style={[styles.textBlack, styles.fs6, styles.mb1,]}>Just Scan and the Ai will know exactly</Text>
                        <Text style={[styles.textGreen, styles.fs6, styles.mb1, styles.border1, styles.p1, styles.w60]}>Scan Now</Text>
                    </View>
                    <Image source={Scan} style={[styles.rounded, styles.mb3,]} />
                </View>
            </ScrollView>
        </View>
    )
}
