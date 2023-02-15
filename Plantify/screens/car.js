import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import database from '@react-native-firebase/database';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Car({navigation,route}) {
    let [list, setList] = useState([])
    getData = () => {
        database().ref('transports/').on('value', dt => {
            let li = Object.values(dt.val());
            let filterList = li.filter(x=>x.vehicleType == "Car")
            setList([...filterList])
            console.log(list)
            //   updateStarCount(postElement, data);
        });
    }

    useEffect(() => {
        getData()
    }, [])

    return (<View style={[styles.h100, styles.p2, , { backgroundColor: "#F6F7FB" }]}>
<View>
            <TouchableOpacity 
                onPress={() => { navigation.navigate("map") }}
                style={[styles.bgDanger, styles.py2, styles.mb2, styles.shadow4, styles.rounded, styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween]}>
                <View style={[styles.w40, styles.justifyContentCenter, styles.alignItemsCenter]}>
                    <Icon color={styles._white} size={80} name="pin-drop" />

                </View>

                <View style={[styles.w60]}>
                    <Text style={[styles.textWhite, styles.fs2]}>BOOK NOW</Text>
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView >
            {
                list.map((e, i) => {
                    return <TouchableOpacity key={i} 
                    onPress={()=>{navigation.navigate("VehicleDetails",e)}}
                    style={[styles.bgWhite,styles.py2, styles.mb2, styles.shadow4, styles.rounded,styles.flexRow,styles.alignItemsCenter,styles.justifyContentBetween]}>
                <View style={[styles.w40,styles.justifyContentCenter,styles.alignItemsCenter]}>
                <Icon color={styles._danger} size={80} name="local-taxi" />

                </View>
                        
                        <View style={[styles.w60]}>
                        <Text style={[styles.textBlack,styles.fs2]}>{e.vehicleName}</Text>
                        <Text style={[styles.fs6,styles.textBlack]}>Driver: {e.driverName}</Text>
                        <Text style={[styles.fs6,styles.textBlack]}>No of Seats: {e.noOfSeats}</Text>
                        <Text style={[styles.textBold,styles.textDanger,styles.fs4]}>Rs {e.price}</Text>
                        </View>
                    </TouchableOpacity>
                })
            }
            
        </ScrollView>


    </View>
    )
}
